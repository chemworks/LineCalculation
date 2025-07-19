<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Line Calculation Report</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        /* Console Output Styles */
        .console-output {
            background-color: #2d2d2d;
            color: #f0f0f0;
            font-family: 'Courier New', Courier, monospace;
            padding: 15px;
            border-radius: 5px;
            white-space: pre-wrap;
            word-wrap: break-word;
            max-height: 500px;
            overflow-y: auto;
        }
        /* Result Table Styles */
        .status-ok {
            background-color: #e6ffed !important;
            color: #257942;
            font-weight: bold;
        }
        .status-no-ok {
            background-color: #ffe5e5 !important;
            color: #c53030;
            font-weight: bold;
        }
        .status-n-a {
            background-color: #f5f5f5 !important;
        }
        .line-details-row > td {
            padding: 0 !important;
            border: 0;
        }
        .card-header.is-clickable {
            cursor: pointer;
        }
        /* Fluid Type Tag Styles */
        .tag.fluid-gas { background-color: #23d160; color: white; }
        .tag.fluid-liquid { background-color: #3273dc; color: white; }
        .tag.fluid-multiphase { background-color: #ffdd57; color: rgba(0, 0, 0, 0.7); }
        .tag.fluid-undefined { background-color: #b5b5b5; }

        /* Smaller Number Inputs */
        input[type=number] {
            max-width: 180px;
        }
        .action-buttons .button {
            margin-right: 5px;
        }

        /* --- Dark Mode Styles --- */
        html.dark-mode {
            background-color: #1a202c;
            color: #cbd5e0;
        }
        .dark-mode body {
             background-color: #1a202c;
        }
        .dark-mode .box, .dark-mode .card {
            background-color: #2d3748;
            color: #e2e8f0;
        }
        .dark-mode .title, .dark-mode .subtitle, .dark-mode .label, .dark-mode .card-header-title {
            color: #e2e8f0;
        }
        .dark-mode .input, .dark-mode .select select, .dark-mode textarea {
            background-color: #4a5568;
            border-color: #718096;
            color: #f7fafc;
        }
        .dark-mode .input::placeholder, .dark-mode textarea::placeholder {
            color: #a0aec0;
        }
        .dark-mode .table {
            background-color: #2d3748;
            color: #e2e8f0;
        }
        .dark-mode .table thead td, .dark-mode .table thead th {
            color: #f7fafc;
            border-color: #4a5568;
        }
        .dark-mode .table tbody tr {
            border-color: #4a5568;
        }
        .dark-mode .table.is-striped tbody tr:not(.is-selected):nth-child(even) {
            background-color: #4a5568;
        }
        .dark-mode .table.is-hoverable tbody tr:not(.is-selected):hover {
            background-color: #718096;
        }
        .dark-mode .button.is-light {
            background-color: #4a5568;
            color: #f7fafc;
        }
        .dark-mode .card-header {
            border-bottom: 1px solid #4a5568;
        }
        .dark-mode .status-ok {
            background-color: #2f855a !important;
            color: #f0fff4;
        }
        .dark-mode .status-no-ok {
            background-color: #c53030 !important;
            color: #fff5f5;
        }
        .dark-mode .status-n-a {
            background-color: #4a5568 !important;
        }
         .dark-mode .select:not(.is-multiple):not(.is-loading)::after {
            border-color: #3182ce;
        }
    </style>
</head>
<body>
    <section class="section">
        <div class="container" style="position: relative;">
            <div style="position: absolute; top: 20px; right: 20px;">
                <button id="dark-mode-toggle" class="button is-small">
                    <span class="icon is-small"><i class="fas fa-moon"></i></span>
                </button>
            </div>

            <h1 class="title is-2 has-text-centered">Line Calculation Report</h1>
            <p class="subtitle is-5 has-text-centered">Sizing and verification tool by fluid type</p>

            <!-- Collapsible Project Info Section -->
            <div class="card mb-5">
                <header class="card-header is-clickable">
                    <p class="card-header-title">
                        Project Information & Design Criteria
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content is-hidden">
                    <div class="content">
                        <h2 class="title is-4">Project Information</h2>
                        <form id="project-info-form" class="box">
                            <div class="field">
                                <label class="label">Project Name</label>
                                <div class="control">
                                    <input class="input" type="text" id="project-name" placeholder="E.g., Gas Pipeline Project" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Project Number</label>
                                <div class="control">
                                    <input class="input" type="text" id="project-number" placeholder="E.g., PRJ-2025-001" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Client</label>
                                <div class="control">
                                    <input class="input" type="text" id="client" placeholder="E.g., Future Energy Inc." required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Prepared by</label>
                                <div class="control">
                                    <input class="input" type="text" id="prepared-by" placeholder="E.g., Your Name / Engineering Dept." required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Reviewed by</label>
                                <div class="control">
                                    <input class="input" type="text" id="reviewed-by" placeholder="E.g., Reviewer's Name" required>
                                </div>
                            </div>
                            <div class="field is-grouped">
                                <div class="control">
                                    <button type="submit" class="button is-link">Save Information</button>
                                </div>
                            </div>
                        </form>
                        <div id="project-info-display" class="content mt-4"></div>

                        <h2 class="title is-4 mt-5">Design Criteria</h2>
                        <div id="design-criteria-display" class="content"></div>
                    </div>
                </div>
            </div>

            <div class="box mt-5">
                <h2 class="title is-4">Process Conditions Management</h2>
                <form id="process-condition-form" class="box">
                    <h3 class="title is-5">Add/Edit Stream</h3>
                    <div class="field">
                        <label class="label">Stream Name</label>
                        <div class="control">
                            <input class="input" type="text" id="pc-stream-name" placeholder="E.g., Stream A" required>
                        </div>
                    </div>
                    <div class="columns is-multiline">
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Gas Flow (Sm³/D)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-gas-flow" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Operating Pressure (kgf/cm²g)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-pressure" value="0" required>
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Temperature (°C)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-temperature" value="0" required>
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Molecular Weight (MW)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-mw" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Z-Factor</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-z-factor" value="1">
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Gamma (Cp/Cv)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-gamma" value="1.3">
                                </div>
                            </div>
                        </div>
                         <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Viscosity (cP)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-viscosity" value="0.012">
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Light Liquid Flow (m³/D)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-light-liq-flow" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Light Liquid Density (kg/m³)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-light-liq-density" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Heavy Liquid Flow (m³/D)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-heavy-liq-flow" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="field">
                                <label class="label">Heavy Liquid Density (kg/m³)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="pc-heavy-liq-density" value="0">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button type="submit" class="button is-link">Save Stream</button>
                        </div>
                        <div class="control">
                            <button type="button" id="pc-clear-form-btn" class="button is-link is-light">Clear Form</button>
                        </div>
                    </div>
                </form>
                <div class="level mt-5">
                    <div class="level-left">
                        <h3 class="title is-5">Current Process Streams</h3>
                    </div>
                    <div class="level-right">
                        <button id="delete-all-streams-btn" class="button is-danger is-small">
                            <span class="icon is-small"><i class="fas fa-trash"></i></span>
                            <span>Delete All Streams</span>
                        </button>
                    </div>
                </div>
                <div id="process-conditions-display" class="table-container"></div>
            </div>

            <div class="box mt-5">
                <h2 class="title is-4">Line Management</h2>
                <form id="line-form" class="box">
                    <h3 class="title is-5">Add/Edit Line</h3>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">Line TAG</label>
                                <div class="control">
                                    <input class="input" type="text" id="line-tag" placeholder="E.g., 10-GH-001-CA11" required>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Design Pressure (kgf/cm²g)</label>
                                <div class="control">
                                    <input class="input" type="number" step="any" id="line-design-pressure" placeholder="E.g., 100" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Line Type</label>
                        <div class="control">
                            <div class="select is-fullwidth">
                                <select id="line-type" required>
                                    <option value="">Select Type</option>
                                    <option value="CF">CF (Continuous Flow)</option>
                                    <option value="NNF">NNF (Normally No Flow)</option>
                                    <option value="VL">VL (Vent Line)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Associated Stream(s)</label>
                        <div class="control">
                            <div class="select is-multiple is-fullwidth">
                                <select id="line-stream-name" multiple required size="5">
                                    <option value="">Loading Streams...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Selected Diameter & Schedule</label>
                        <div class="control">
                            <div class="select is-fullwidth">
                                <select id="line-diameter-id" required>
                                    <option value="">Loading Diameters...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button type="submit" class="button is-link">Save Line</button>
                        </div>
                        <div class="control">
                            <button type="button" id="line-clear-form-btn" class="button is-link is-light">Clear Form</button>
                        </div>
                    </div>
                    <p class="help" id="line-suggestion-display"></p>
                </form>
                <div class="level mt-5">
                     <div class="level-left">
                        <h3 class="title is-5">Current Lines</h3>
                    </div>
                    <div class="level-right">
                         <button id="delete-all-lines-btn" class="button is-danger is-small">
                            <span class="icon is-small"><i class="fas fa-trash"></i></span>
                            <span>Delete All Lines</span>
                        </button>
                    </div>
                </div>
                <div id="lines-display" class="table-container"></div>
            </div>

            <div class="field is-grouped is-grouped-centered mt-5">
                <p class="control">
                    <button id="calculate-btn" class="button is-primary is-medium">
                        <span class="icon is-small"><i class="fas fa-calculator"></i></span>
                        <span>Calculate</span>
                    </button>
                </p>
                <p class="control">
                    <button id="save-project-btn" class="button is-success is-medium">
                        <span class="icon is-small"><i class="fas fa-save"></i></span>
                        <span>Save Project</span>
                    </button>
                </p>
                <p class="control">
                    <input type="file" id="load-project-file-input" style="display:none;" accept=".json">
                    <button id="load-project-btn" class="button is-info is-medium">
                        <span class="icon is-small"><i class="fas fa-upload"></i></span>
                        <span>Load Project</span>
                    </button>
                </p>
                <p class="control">
                    <button id="download-csv-btn" class="button is-link is-medium" disabled>
                        <span class="icon is-small"><i class="fas fa-file-csv"></i></span>
                        <span>Download CSV</span>
                    </button>
                </p>
                <p class="control">
                    <button id="download-pdf-btn" class="button is-danger is-medium" disabled>
                         <span class="icon is-small"><i class="fas fa-file-pdf"></i></span>
                        <span>Download PDF</span>
                    </button>
                </p>
                 <p class="control">
                    <button id="download-all-btn" class="button is-dark is-medium" disabled>
                         <span class="icon is-small"><i class="fas fa-download"></i></span>
                        <span>Download All</span>
                    </button>
                </p>
                 <p class="control">
                    <button id="reset-data-btn" class="button is-danger is-outlined is-medium">
                        <span class="icon is-small"><i class="fas fa-undo"></i></span>
                        <span>Reset</span>
                    </button>
                </p>
            </div>

            <div class="box mt-5" id="results-section" style="display:none;">
                <h2 class="title is-4">Engineering List (Results Table)</h2>
                <div id="engineering-list-table" class="table-container"></div>
                
                <div class="card mt-5">
                    <header class="card-header is-clickable">
                        <p class="card-header-title">
                            Detailed Results (Calculation Console)
                        </p>
                        <button class="card-header-icon" aria-label="more options">
                            <span class="icon">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </header>
                    <div class="card-content is-hidden">
                        <div class="content">
                             <pre id="calculation-output" class="console-output"></pre>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.23/jspdf.plugin.autotable.min.js"></script>
    
    <script src="script.js"></script>
</body>
</html>
