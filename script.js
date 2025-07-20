// js/script.js

// --- Global Constants ---
const constants = {
    MM_TO_M: 0.001,
    KGFCMA_TO_PA: 98066.5,
    PSI_TO_PA: 6894.76,
    CELSIUS_TO_KELVIN: 273.15,
    R_UNIVERSAL_J_MOLK: 8.314462618,
    T_STANDARD_K: 273.15,
    P_STANDARD_KGF_CM2A: 1.03323,
    DAYS_TO_SECONDS: 24 * 3600,
    M3_PER_D_TO_M3_PER_S: 1 / (24 * 3600),
    K_G_PER_M3_TO_LB_PER_FT3: 0.062428,
    FT_PER_S_TO_M_PER_S: 0.3048,
    PA_TO_BAR: 1e-5,
    CP_TO_PAS: 0.001,
    KGFCM2_TO_BAR: 0.980665
};

// --- Data Definitions (mutable) ---

const diametersData = {
    // NPS 1/8" (DN 6)
    "1/8-40": {"DN": "1/8", "DE_mm": 10.29, "DI_mm": 6.83, "e_mm": 1.73},
    "1/8-80": {"DN": "1/8", "DE_mm": 10.29, "DI_mm": 5.41, "e_mm": 2.44},
    "1/8-XS": {"DN": "1/8", "DE_mm": 10.29, "DI_mm": 5.41, "e_mm": 2.44},
    "1/8-160": {"DN": "1/8", "DE_mm": 10.29, "DI_mm": 3.43, "e_mm": 3.43},
    "1/4-40": {"DN": "1/4", "DE_mm": 13.72, "DI_mm": 9.25, "e_mm": 2.24},
    "1/4-80": {"DN": "1/4", "DE_mm": 13.72, "DI_mm": 7.37, "e_mm": 3.18},
    "1/4-XS": {"DN": "1/4", "DE_mm": 13.72, "DI_mm": 7.37, "e_mm": 3.18},
    "1/4-160": {"DN": "1/4", "DE_mm": 13.72, "DI_mm": 5.82, "e_mm": 3.95},
    "3/8-40": {"DN": "3/8", "DE_mm": 17.15, "DI_mm": 12.87, "e_mm": 2.14},
    "3/8-80": {"DN": "3/8", "DE_mm": 17.15, "DI_mm": 10.99, "e_mm": 3.08},
    "3/8-XS": {"DN": "3/8", "DE_mm": 17.15, "DI_mm": 10.99, "e_mm": 3.08},
    "3/8-160": {"DN": "3/8", "DE_mm": 17.15, "DI_mm": 8.08, "e_mm": 4.53},
    "1/2-10S": {"DN": "1/2", "DE_mm": 21.34, "DI_mm": 18.04, "e_mm": 1.65},
    "1/2-40": {"DN": "1/2", "DE_mm": 21.34, "DI_mm": 15.80, "e_mm": 2.77},
    "1/2-STD": {"DN": "1/2", "DE_mm": 21.34, "DI_mm": 15.80, "e_mm": 2.77},
    "1/2-80": {"DN": "1/2", "DE_mm": 21.34, "DI_mm": 13.90, "e_mm": 3.73},
    "1/2-XS": {"DN": "1/2", "DE_mm": 21.34, "DI_mm": 13.90, "e_mm": 3.73},
    "1/2-160": {"DN": "1/2", "DE_mm": 21.34, "DI_mm": 11.78, "e_mm": 4.78},
    "1/2-XXS": {"DN": "1/2", "DE_mm": 21.34, "DI_mm": 6.40, "e_mm": 7.47},
    "3/4-10S": {"DN": "3/4", "DE_mm": 26.67, "DI_mm": 23.37, "e_mm": 1.65},
    "3/4-40": {"DN": "3/4", "DE_mm": 26.67, "DI_mm": 20.93, "e_mm": 2.87},
    "3/4-STD": {"DN": "3/4", "DE_mm": 26.67, "DI_mm": 20.93, "e_mm": 2.87},
    "3/4-80": {"DN": "3/4", "DE_mm": 26.67, "DI_mm": 18.85, "e_mm": 3.91},
    "3/4-XS": {"DN": "3/4", "DE_mm": 26.67, "DI_mm": 18.85, "e_mm": 3.91},
    "3/4-160": {"DN": "3/4", "DE_mm": 26.67, "DI_mm": 15.55, "e_mm": 5.56},
    "3/4-XXS": {"DN": "3/4", "DE_mm": 26.67, "DI_mm": 11.03, "e_mm": 7.82},
    "1-10S": {"DN": "1", "DE_mm": 33.40, "DI_mm": 30.10, "e_mm": 1.65},
    "1-40": {"DN": "1", "DE_mm": 33.40, "DI_mm": 26.64, "e_mm": 3.38},
    "1-STD": {"DN": "1", "DE_mm": 33.40, "DI_mm": 26.64, "e_mm": 3.38},
    "1-80": {"DN": "1", "DE_mm": 33.40, "DI_mm": 24.30, "e_mm": 4.55},
    "1-XS": {"DN": "1", "DE_mm": 33.40, "DI_mm": 24.30, "e_mm": 4.55},
    "1-160": {"DN": "1", "DE_mm": 33.40, "DI_mm": 20.70, "e_mm": 6.35},
    "1-XXS": {"DN": "1", "DE_mm": 33.40, "DI_mm": 15.22, "e_mm": 9.09},
    "1 1/4-10S": {"DN": "1 1/4", "DE_mm": 42.16, "DI_mm": 38.86, "e_mm": 1.65},
    "1 1/4-40": {"DN": "1 1/4", "DE_mm": 42.16, "DI_mm": 35.05, "e_mm": 3.56},
    "1 1/4-STD": {"DN": "1 1/4", "DE_mm": 42.16, "DI_mm": 35.05, "e_mm": 3.56},
    "1 1/4-80": {"DN": "1 1/4", "DE_mm": 42.16, "DI_mm": 32.46, "e_mm": 4.85},
    "1 1/4-XS": {"DN": "1 1/4", "DE_mm": 42.16, "DI_mm": 32.46, "e_mm": 4.85},
    "1 1/4-160": {"DN": "1 1/4", "DE_mm": 42.16, "DI_mm": 29.46, "e_mm": 6.35},
    "1 1/4-XXS": {"DN": "1 1/4", "DE_mm": 42.16, "DI_mm": 22.22, "e_mm": 9.97},
    "1 1/2-10S": {"DN": "1 1/2", "DE_mm": 48.26, "DI_mm": 44.96, "e_mm": 1.65},
    "1 1/2-40": {"DN": "1 1/2", "DE_mm": 48.26, "DI_mm": 40.89, "e_mm": 3.68},
    "1 1/2-STD": {"DN": "1 1/2", "DE_mm": 48.26, "DI_mm": 40.89, "e_mm": 3.68},
    "1 1/2-80": {"DN": "1 1/2", "DE_mm": 48.26, "DI_mm": 38.10, "e_mm": 5.08},
    "1 1/2-XS": {"DN": "1 1/2", "DE_mm": 48.26, "DI_mm": 38.10, "e_mm": 5.08},
    "1 1/2-160": {"DN": "1 1/2", "DE_mm": 48.26, "DI_mm": 34.04, "e_mm": 7.11},
    "1 1/2-XXS": {"DN": "1 1/2", "DE_mm": 48.26, "DI_mm": 27.94, "e_mm": 10.16},
    "2-10S": {"DN": "2", "DE_mm": 60.33, "DI_mm": 56.93, "e_mm": 1.70},
    "2-40": {"DN": "2", "DE_mm": 60.33, "DI_mm": 52.53, "e_mm": 3.91},
    "2-STD": {"DN": "2", "DE_mm": 60.33, "DI_mm": 52.53, "e_mm": 3.91},
    "2-80": {"DN": "2", "DE_mm": 60.33, "DI_mm": 49.25, "e_mm": 5.54},
    "2-XS": {"DN": "2", "DE_mm": 60.33, "DI_mm": 49.25, "e_mm": 5.54},
    "2-160": {"DN": "2", "DE_mm": 60.33, "DI_mm": 42.84, "e_mm": 8.74},
    "2-XXS": {"DN": "2", "DE_mm": 60.33, "DI_mm": 38.17, "e_mm": 11.07},
    "2 1/2-10S": {"DN": "2 1/2", "DE_mm": 73.03, "DI_mm": 69.93, "e_mm": 1.55},
    "2 1/2-40": {"DN": "2 1/2", "DE_mm": 73.03, "DI_mm": 62.71, "e_mm": 5.16},
    "2 1/2-STD": {"DN": "2 1/2", "DE_mm": 73.03, "DI_mm": 62.71, "e_mm": 5.16},
    "2 1/2-80": {"DN": "2 1/2", "DE_mm": 73.03, "DI_mm": 59.70, "e_mm": 7.01},
    "2 1/2-XS": {"DN": "2 1/2", "DE_mm": 73.03, "DI_mm": 59.70, "e_mm": 7.01},
    "2 1/2-160": {"DN": "2 1/2", "DE_mm": 73.03, "DI_mm": 53.97, "e_mm": 9.53},
    "2 1/2-XXS": {"DN": "2 1/2", "DE_mm": 73.03, "DI_mm": 44.99, "e_mm": 14.02},
    "3-10S": {"DN": "3", "DE_mm": 88.90, "DI_mm": 85.80, "e_mm": 1.55},
    "3-40": {"DN": "3", "DE_mm": 88.90, "DI_mm": 77.93, "e_mm": 5.49},
    "3-STD": {"DN": "3", "DE_mm": 88.90, "DI_mm": 77.93, "e_mm": 5.49},
    "3-80": {"DN": "3", "DE_mm": 88.90, "DI_mm": 73.86, "e_mm": 7.62},
    "3-XS": {"DN": "3", "DE_mm": 88.90, "DI_mm": 73.86, "e_mm": 7.62},
    "3-160": {"DN": "3", "DE_mm": 88.90, "DI_mm": 66.50, "e_mm": 11.20},
    "3-XXS": {"DN": "3", "DE_mm": 88.90, "DI_mm": 58.42, "e_mm": 15.24},
    "3 1/2-10S": {"DN": "3 1/2", "DE_mm": 101.60, "DI_mm": 98.40, "e_mm": 1.60},
    "3 1/2-40": {"DN": "3 1/2", "DE_mm": 101.60, "DI_mm": 90.17, "e_mm": 5.71},
    "3 1/2-STD": {"DN": "3 1/2", "DE_mm": 101.60, "DI_mm": 90.17, "e_mm": 5.71},
    "3 1/2-80": {"DN": "3 1/2", "DE_mm": 101.60, "DI_mm": 85.34, "e_mm": 8.13},
    "3 1/2-XS": {"DN": "3 1/2", "DE_mm": 101.60, "DI_mm": 85.34, "e_mm": 8.13},
    "4-10S": {"DN": "4", "DE_mm": 114.30, "DI_mm": 111.00, "e_mm": 1.65},
    "4-40": {"DN": "4", "DE_mm": 114.30, "DI_mm": 102.26, "e_mm": 6.02},
    "4-STD": {"DN": "4", "DE_mm": 114.30, "DI_mm": 102.26, "e_mm": 6.02},
    "4-80": {"DN": "4", "DE_mm": 114.30, "DI_mm": 97.23, "e_mm": 8.56},
    "4-XS": {"DN": "4", "DE_mm": 114.30, "DI_mm": 97.23, "e_mm": 8.56},
    "4-120": {"DN": "4", "DE_mm": 114.30, "DI_mm": 92.10, "e_mm": 11.10},
    "4-160": {"DN": "4", "DE_mm": 114.30, "DI_mm": 87.48, "e_mm": 13.41},
    "4-XXS": {"DN": "4", "DE_mm": 114.30, "DI_mm": 80.06, "e_mm": 17.12},
    "5-10S": {"DN": "5", "DE_mm": 141.30, "DI_mm": 137.90, "e_mm": 1.70},
    "5-40": {"DN": "5", "DE_mm": 141.30, "DI_mm": 128.19, "e_mm": 6.55},
    "5-STD": {"DN": "5", "DE_mm": 141.30, "DI_mm": 128.19, "e_mm": 6.55},
    "5-80": {"DN": "5", "DE_mm": 141.30, "DI_mm": 122.20, "e_mm": 9.55},
    "5-XS": {"DN": "5", "DE_mm": 141.30, "DI_mm": 122.20, "e_mm": 9.55},
    "5-120": {"DN": "5", "DE_mm": 141.30, "DI_mm": 115.89, "e_mm": 12.70},
    "5-160": {"DN": "5", "DE_mm": 141.30, "DI_mm": 109.54, "e_mm": 15.88},
    "5-XXS": {"DN": "5", "DE_mm": 141.30, "DI_mm": 103.20, "e_mm": 19.05},
    "6-10S": {"DN": "6", "DE_mm": 168.27, "DI_mm": 164.77, "e_mm": 1.75},
    "6-40": {"DN": "6", "DE_mm": 168.27, "DI_mm": 154.05, "e_mm": 7.11},
    "6-STD": {"DN": "6", "DE_mm": 168.27, "DI_mm": 154.05, "e_mm": 7.11},
    "6-80": {"DN": "6", "DE_mm": 168.27, "DI_mm": 146.33, "e_mm": 10.97},
    "6-XS": {"DN": "6", "DE_mm": 168.27, "DI_mm": 146.33, "e_mm": 10.97},
    "6-120": {"DN": "6", "DE_mm": 168.27, "DI_mm": 139.70, "e_mm": 14.27},
    "6-160": {"DN": "6", "DE_mm": 168.27, "DI_mm": 131.70, "e_mm": 18.28},
    "6-XXS": {"DN": "6", "DE_mm": 168.27, "DI_mm": 124.38, "e_mm": 21.95},
    "8-10S": {"DN": "8", "DE_mm": 219.08, "DI_mm": 215.42, "e_mm": 1.83},
    "8-20": {"DN": "8", "DE_mm": 219.08, "DI_mm": 214.08, "e_mm": 2.50},
    "8-30": {"DN": "8", "DE_mm": 219.08, "DI_mm": 213.54, "e_mm": 2.77},
    "8-40": {"DN": "8", "DE_mm": 219.08, "DI_mm": 206.28, "e_mm": 6.35},
    "8-STD": {"DN": "8", "DE_mm": 219.08, "DI_mm": 206.28, "e_mm": 6.35},
    "8-60": {"DN": "8", "DE_mm": 219.08, "DI_mm": 202.72, "e_mm": 8.18},
    "8-80": {"DN": "8", "DE_mm": 219.08, "DI_mm": 202.72, "e_mm": 8.18},
    "8-XS": {"DN": "8", "DE_mm": 219.08, "DI_mm": 202.72, "e_mm": 8.18},
    "8-100": {"DN": "8", "DE_mm": 219.08, "DI_mm": 188.88, "e_mm": 15.10},
    "8-120": {"DN": "8", "DE_mm": 219.08, "DI_mm": 174.62, "e_mm": 22.23},
    "8-140": {"DN": "8", "DE_mm": 219.08, "DI_mm": 173.05, "e_mm": 23.01},
    "8-160": {"DN": "8", "DE_mm": 219.08, "DI_mm": 173.05, "e_mm": 23.01},
    "8-XXS": {"DN": "8", "DE_mm": 219.08, "DI_mm": 173.05, "e_mm": 23.01},
    "10-10S": {"DN": "10", "DE_mm": 273.05, "DI_mm": 269.45, "e_mm": 1.80},
    "10-20": {"DN": "10", "DE_mm": 273.05, "DI_mm": 268.05, "e_mm": 2.50},
    "10-30": {"DN": "10", "DE_mm": 273.05, "DI_mm": 267.01, "e_mm": 3.02},
    "10-40": {"DN": "10", "DE_mm": 273.05, "DI_mm": 260.35, "e_mm": 6.35},
    "10-STD": {"DN": "10", "DE_mm": 273.05, "DI_mm": 260.35, "e_mm": 6.35},
    "10-60": {"DN": "10", "DE_mm": 273.05, "DI_mm": 254.51, "e_mm": 9.27},
    "10-80": {"DN": "10", "DE_mm": 273.05, "DI_mm": 242.93, "e_mm": 15.06},
    "10-XS": {"DN": "10", "DE_mm": 273.05, "DI_mm": 242.93, "e_mm": 15.06},
    "10-100": {"DN": "10", "DE_mm": 273.05, "DI_mm": 236.57, "e_mm": 18.24},
    "10-120": {"DN": "10", "DE_mm": 273.05, "DI_mm": 229.11, "e_mm": 21.97},
    "10-140": {"DN": "10", "DE_mm": 273.05, "DI_mm": 222.25, "e_mm": 25.40},
    "10-160": {"DN": "10", "DE_mm": 273.05, "DI_mm": 215.92, "e_mm": 28.575},
    "10-XXS": {"DN": "10", "DE_mm": 273.05, "DI_mm": 222.25, "e_mm": 25.40},
    "12-10S": {"DN": "12", "DE_mm": 323.85, "DI_mm": 320.05, "e_mm": 1.90},
    "12-20": {"DN": "12", "DE_mm": 323.85, "DI_mm": 318.85, "e_mm": 2.50},
    "12-30": {"DN": "12", "DE_mm": 323.85, "DI_mm": 317.25, "e_mm": 3.30},
    "12-40": {"DN": "12", "DE_mm": 323.85, "DI_mm": 311.15, "e_mm": 6.35},
    "12-STD": {"DN": "12", "DE_mm": 323.85, "DI_mm": 311.15, "e_mm": 6.35},
    "12-60": {"DN": "12", "DE_mm": 323.85, "DI_mm": 303.23, "e_mm": 10.31},
    "12-80": {"DN": "12", "DE_mm": 323.85, "DI_mm": 288.95, "e_mm": 17.45},
    "12-XS": {"DN": "12", "DE_mm": 323.85, "DI_mm": 288.95, "e_mm": 17.45},
    "12-100": {"DN": "12", "DE_mm": 323.85, "DI_mm": 273.05, "e_mm": 25.40},
    "12-120": {"DN": "12", "DE_mm": 323.85, "DI_mm": 257.20, "e_mm": 33.324},
    "12-140": {"DN": "12", "DE_mm": 323.85, "DI_mm": 247.90, "e_mm": 37.97},
    "12-160": {"DN": "12", "DE_mm": 323.85, "DI_mm": 236.57, "e_mm": 43.64},
    "12-XXS": {"DN": "12", "DE_mm": 323.85, "DI_mm": 273.05, "e_mm": 25.40},
    "14-10S": {"DN": "14", "DE_mm": 355.60, "DI_mm": 351.60, "e_mm": 2.00},
    "14-20": {"DN": "14", "DE_mm": 355.60, "DI_mm": 349.08, "e_mm": 3.26},
    "14-30": {"DN": "14", "DE_mm": 355.60, "DI_mm": 346.88, "e_mm": 4.36},
    "14-40": {"DN": "14", "DE_mm": 355.60, "DI_mm": 339.75, "e_mm": 7.92},
    "14-STD": {"DN": "14", "DE_mm": 355.60, "DI_mm": 339.75, "e_mm": 7.92},
    "14-60": {"DN": "14", "DE_mm": 355.60, "DI_mm": 333.40, "e_mm": 11.10},
    "14-80": {"DN": "14", "DE_mm": 355.60, "DI_mm": 317.50, "e_mm": 19.05},
    "14-XS": {"DN": "14", "DE_mm": 355.60, "DI_mm": 317.50, "e_mm": 19.05},
    "14-100": {"DN": "14", "DE_mm": 355.60, "DI_mm": 306.90, "e_mm": 24.35},
    "14-120": {"DN": "14", "DE_mm": 355.60, "DI_mm": 298.45, "e_mm": 28.57},
    "14-140": {"DN": "14", "DE_mm": 355.60, "DI_mm": 289.89, "e_mm": 32.85},
    "14-160": {"DN": "14", "DE_mm": 355.60, "DI_mm": 284.17, "e_mm": 35.71},
    "14-XXS": {"DN": "14", "DE_mm": 355.60, "DI_mm": 284.17, "e_mm": 35.71},
    "16-10S": {"DN": "16", "DE_mm": 406.40, "DI_mm": 402.40, "e_mm": 2.00},
    "16-20": {"DN": "16", "DE_mm": 406.40, "DI_mm": 399.78, "e_mm": 3.31},
    "16-30": {"DN": "16", "DE_mm": 406.40, "DI_mm": 398.20, "e_mm": 4.10},
    "16-40": {"DN": "16", "DE_mm": 406.40, "DI_mm": 390.56, "e_mm": 7.92},
    "16-STD": {"DN": "16", "DE_mm": 406.40, "DI_mm": 390.56, "e_mm": 7.92},
    "16-60": {"DN": "16", "DE_mm": 406.40, "DI_mm": 381.00, "e_mm": 12.70},
    "16-80": {"DN": "16", "DE_mm": 406.40, "DI_mm": 363.52, "e_mm": 21.44},
    "16-XS": {"DN": "16", "DE_mm": 406.40, "DI_mm": 363.52, "e_mm": 21.44},
    "16-100": {"DN": "16", "DE_mm": 406.40, "DI_mm": 349.25, "e_mm": 28.57},
    "16-120": {"DN": "16", "DE_mm": 406.40, "DI_mm": 333.38, "e_mm": 36.51},
    "16-140": {"DN": "16", "DE_mm": 406.40, "DI_mm": 320.04, "e_mm": 43.18},
    "16-160": {"DN": "16", "DE_mm": 406.40, "DI_mm": 307.98, "e_mm": 49.21},
    "16-XXS": {"DN": "16", "DE_mm": 406.40, "DI_mm": 317.50, "e_mm": 44.45},
    "18-10S": {"DN": "18", "DE_mm": 457.20, "DI_mm": 453.20, "e_mm": 2.00},
    "18-20": {"DN": "18", "DE_mm": 457.20, "DI_mm": 450.48, "e_mm": 3.36},
    "18-30": {"DN": "18", "DE_mm": 457.20, "DI_mm": 448.78, "e_mm": 4.21},
    "18-40": {"DN": "18", "DE_mm": 457.20, "DI_mm": 441.76, "e_mm": 7.72},
    "18-STD": {"DN": "18", "DE_mm": 457.20, "DI_mm": 441.76, "e_mm": 7.72},
    "18-60": {"DN": "18", "DE_mm": 457.20, "DI_mm": 429.06, "e_mm": 14.07},
    "18-80": {"DN": "18", "DE_mm": 457.20, "DI_mm": 409.94, "e_mm": 23.63},
    "18-XS": {"DN": "18", "DE_mm": 457.20, "DI_mm": 409.94, "e_mm": 23.63},
    "18-100": {"DN": "18", "DE_mm": 457.20, "DI_mm": 390.52, "e_mm": 33.34},
    "18-120": {"DN": "18", "DE_mm": 457.20, "DI_mm": 376.22, "e_mm": 40.49},
    "18-140": {"DN": "18", "DE_mm": 457.20, "DI_mm": 363.52, "e_mm": 46.84},
    "18-160": {"DN": "18", "DE_mm": 457.20, "DI_mm": 350.84, "e_mm": 53.18},
    "18-XXS": {"DN": "18", "DE_mm": 457.20, "DI_mm": 350.84, "e_mm": 53.18},
    "20-10S": {"DN": "20", "DE_mm": 508.00, "DI_mm": 503.80, "e_mm": 2.10},
    "20-20": {"DN": "20", "DE_mm": 508.00, "DI_mm": 500.00, "e_mm": 4.00},
    "20-30": {"DN": "20", "DE_mm": 508.00, "DI_mm": 498.40, "e_mm": 4.80},
    "20-40": {"DN": "20", "DE_mm": 508.00, "DI_mm": 488.96, "e_mm": 9.52},
    "20-STD": {"DN": "20", "DE_mm": 508.00, "DI_mm": 488.96, "e_mm": 9.52},
    "20-60": {"DN": "20", "DE_mm": 508.00, "DI_mm": 477.82, "e_mm": 15.09},
    "20-80": {"DN": "20", "DE_mm": 508.00, "DI_mm": 455.62, "e_mm": 26.19},
    "20-XS": {"DN": "20", "DE_mm": 508.00, "DI_mm": 455.62, "e_mm": 26.19},
    "20-100": {"DN": "20", "DE_mm": 508.00, "DI_mm": 435.00, "e_mm": 36.50},
    "20-120": {"DN": "20", "DE_mm": 508.00, "DI_mm": 412.75, "e_mm": 47.62},
    "20-140": {"DN": "20", "DE_mm": 508.00, "DI_mm": 393.70, "e_mm": 57.15},
    "20-160": {"DN": "20", "DE_mm": 508.00, "DI_mm": 377.94, "e_mm": 65.03},
    "20-XXS": {"DN": "20", "DE_mm": 508.00, "DI_mm": 400.05, "e_mm": 53.97},
    "24-10S": {"DN": "24", "DE_mm": 609.60, "DI_mm": 605.20, "e_mm": 2.20},
    "24-20": {"DN": "24", "DE_mm": 609.60, "DI_mm": 600.00, "e_mm": 4.80},
    "24-30": {"DN": "24", "DE_mm": 609.60, "DI_mm": 597.20, "e_mm": 6.20},
    "24-40": {"DN": "24", "DE_mm": 609.60, "DI_mm": 590.56, "e_mm": 9.52},
    "24-STD": {"DN": "24", "DE_mm": 609.60, "DI_mm": 590.56, "e_mm": 9.52},
    "24-60": {"DN": "24", "DE_mm": 609.60, "DI_mm": 574.64, "e_mm": 17.48},
    "24-80": {"DN": "24", "DE_mm": 609.60, "DI_mm": 547.68, "e_mm": 30.96},
    "24-XS": {"DN": "24", "DE_mm": 609.60, "DI_mm": 547.68, "e_mm": 30.96},
    "24-100": {"DN": "24", "DE_mm": 609.60, "DI_mm": 517.50, "e_mm": 46.05},
    "24-120": {"DN": "24", "DE_mm": 609.60, "DI_mm": 490.00, "e_mm": 59.80},
    "24-140": {"DN": "24", "DE_mm": 609.60, "DI_mm": 470.00, "e_mm": 69.80},
    "24-160": {"DN": "24", "DE_mm": 609.60, "DI_mm": 450.00, "e_mm": 79.80},
    "24-XXS": {"DN": "24", "DE_mm": 609.60, "DI_mm": 488.96, "e_mm": 60.32}
};

let designCriteria = {
    // Flow Criteria
    "max_velocity_gas_mps": 20.0,
    "max_velocity_liquid_mps": 3.0,
    "max_velocity_multiphase_mps": 18.0,
    "max_rhov2_kg_per_m_s2": 3750.0,
    "max_mach_vent_lines": 0.7,
    "api14e_c_factor_nnf": 125.0,
    "api14e_c_factor_cf": 100.0,
    "pipe_roughness_mm": 0.045,
    // Thickness Criteria
    "allowable_stress_psi": 20000.0,
    "quality_factor_E": 1.0,
    "temp_coefficient_Y": 0.4,
    "corrosion_allowance_mm": 1.5
};

let currentProcessConditions = {
    "0_inlet_hot": {
        "Gas_Flow_Sm3_D": 180000.0, "Pressure_kgf_cm2g": 80.0, "Temperature_C": 45.0,
        "MW": 20.0, "Z_Factor": 0.95, "Gamma": 1.3, "Viscosity_cP": 0.012,
        "Light_Liquid_Flow_m3_D": 2.0, "Light_Liquid_Density_kg_m3": 650.0,
        "Heavy_Liquid_Flow_m3_D": 2.0, "Heavy_Liquid_Density_kg_m3": 1000.0,
        "Fluid_Type": "Multiphase"
    },
    "1_disch_hot_gas": {
        "Gas_Flow_Sm3_D": 180000.0, "Pressure_kgf_cm2g": 100.0, "Temperature_C": 135.0,
        "MW": 20.0, "Z_Factor": 0.98, "Gamma": 1.25, "Viscosity_cP": 0.015,
        "Light_Liquid_Flow_m3_D": 0.0, "Light_Liquid_Density_kg_m3": 0.0,
        "Heavy_Liquid_Flow_m3_D": 0.0, "Heavy_Liquid_Density_kg_m3": 0.0,
        "Fluid_Type": "Gas"
    },
    "2_pump_suction_liquid": {
        "Gas_Flow_Sm3_D": 0.0, "Pressure_kgf_cm2g": 5.0, "Temperature_C": 40.0,
        "MW": 0.0, "Z_Factor": 1.0, "Gamma": 1.3, "Viscosity_cP": 1.0,
        "Light_Liquid_Flow_m3_D": 50.0, "Light_Liquid_Density_kg_m3": 750.0,
        "Heavy_Liquid_Flow_m3_D": 0.0, "Heavy_Liquid_Density_kg_m3": 0.0,
        "Fluid_Type": "Liquid"
    },
    "vent": {
        "Gas_Flow_Sm3_D": 180000.0, "Pressure_kgf_cm2g": 0.50, "Temperature_C": 50.0,
        "MW": 20.0, "Z_Factor": 0.9, "Gamma": 1.3, "Viscosity_cP": 0.011,
        "Light_Liquid_Flow_m3_D": 0.0, "Light_Liquid_Density_kg_m3": 0.0,
        "Heavy_Liquid_Flow_m3_D": 0.0, "Heavy_Liquid_Density_kg_m3": 0.0,
        "Fluid_Type": "Gas"
    },
    "startup": {
        "Gas_Flow_Sm3_D": 215000.0, "Pressure_kgf_cm2g": 8.50, "Temperature_C": 50.0,
        "MW": 20.0, "Z_Factor": 0.9, "Gamma": 1.3, "Viscosity_cP": 0.011,
        "Light_Liquid_Flow_m3_D": 0.0, "Light_Liquid_Density_kg_m3": 0.0,
        "Heavy_Liquid_Flow_m3_D": 0.0, "Heavy_Liquid_Density_kg_m3": 0.0,
        "Fluid_Type": "Gas"
    },
};

let currentLinesData = {
    "10-GH-001-CA11": {
        "Selected_Diameter_ID": "10-80", "Stream_Names": ["0_inlet_hot"], "Type": "CF", "Design_Pressure_kgf_cm2g": 100.0
    },
    "6-GH-003-CA11": {
        "Selected_Diameter_ID": "6-80", "Stream_Names": ["1_disch_hot_gas"], "Type": "CF", "Design_Pressure_kgf_cm2g": 105.0
    },
    "4-L-005-CA21": {
        "Selected_Diameter_ID": "4-80", "Stream_Names": ["2_pump_suction_liquid"], "Type": "CF", "Design_Pressure_kgf_cm2g": 15.0
    },
    "4-V-009-CA11": {
        "Selected_Diameter_ID": "4-40", "Stream_Names": ["vent"], "Type": "VL", "Design_Pressure_kgf_cm2g": 10.0
    },
    "4-NNF-010-CA11": {
        "Selected_Diameter_ID": "4-40", "Stream_Names": ["startup"], "Type": "NNF", "Design_Pressure_kgf_cm2g": 10.0
    },
};

let projectInfo = {
    "Project Name": "Gas Network Optimization Project",
    "Project Number": "PRJ-2025-001",
    "Client": "Future Energy Inc.",
    "Date": new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }),
    "Prepared by": "Engineering Department",
    "Reviewed by": "Head of Engineering"
};

const originalProcessConditions = JSON.parse(JSON.stringify(currentProcessConditions));
const originalLinesData = JSON.parse(JSON.stringify(currentLinesData));


// --- Helper Functions ---

function calculateRequiredThickness(P_kgfcm2g, D_ext_mm, S_psi, E, Y, c_mm) {
    const P_pa = P_kgfcm2g * constants.KGFCMA_TO_PA;
    const S_pa = S_psi * constants.PSI_TO_PA;
    const t_pressure_mm = (P_pa * D_ext_mm) / (2 * (S_pa * E + P_pa * Y));
    const t_required_mm = t_pressure_mm + c_mm;
    return { t_required_mm, t_pressure_mm };
}

function calculateActualFlowRateGas(caudal_sm3_d, presion_kgf_cm2g, temperatura_c, z) {
    const P_abs_kgf_cm2a = presion_kgf_cm2g + constants.P_STANDARD_KGF_CM2A;
    const T_kelvin = temperatura_c + constants.CELSIUS_TO_KELVIN;
    const V_actual_m3_per_day = (caudal_sm3_d * (constants.P_STANDARD_KGF_CM2A / P_abs_kgf_cm2a) * (T_kelvin / constants.T_STANDARD_K) * z);
    return V_actual_m3_per_day / constants.DAYS_TO_SECONDS;
}

function calculateActualFlowRateLiquid(flow_m3_d) {
    return flow_m3_d * constants.M3_PER_D_TO_M3_PER_S;
}

function calculateGasDensity(pressure_pa_abs, temperature_k, mw_kg_kmol, z) {
    if (mw_kg_kmol === 0) return 0;
    return (pressure_pa_abs * mw_kg_kmol / 1000) / (z * constants.R_UNIVERSAL_J_MOLK * temperature_k);
}

function calculateSpeedOfSound(gamma, z, temperature_k, mw_kg_mol) {
    if (mw_kg_mol === 0) return 0;
    return Math.sqrt(gamma * z * constants.R_UNIVERSAL_J_MOLK * temperature_k / mw_kg_mol);
}

function calculateMixtureProperties(gas_flow_m3_s, gas_density_kg_m3, light_liquid_flow_m3_s, light_liquid_density_kg_m3, heavy_liquid_flow_m3_s, heavy_liquid_density_kg_m3) {
    const total_volume_flow = gas_flow_m3_s + light_liquid_flow_m3_s + heavy_liquid_flow_m3_s;
    const mass_flow_gas = gas_flow_m3_s * gas_density_kg_m3;
    const mass_flow_ll = light_liquid_flow_m3_s * light_liquid_density_kg_m3;
    const mass_flow_hl = heavy_liquid_flow_m3_s * heavy_liquid_density_kg_m3;
    const total_mass_flow = mass_flow_gas + mass_flow_ll + mass_flow_hl;
    const mixture_density = total_volume_flow > 0 ? total_mass_flow / total_volume_flow : 0;
    return { total_volume_flow, mixture_density };
}

function calculateApi14eErosionalVelocity(c_factor, mixture_density_kg_m3) {
    const mixture_density_lb_ft3 = mixture_density_kg_m3 * constants.K_G_PER_M3_TO_LB_PER_FT3;
    if (mixture_density_lb_ft3 <= 0) return Infinity;
    const erosional_velocity_ft_s = c_factor / Math.sqrt(mixture_density_lb_ft3);
    return erosional_velocity_ft_s * constants.FT_PER_S_TO_M_PER_S;
}

function calculatePressureDrop(density_kg_m3, velocity_mps, diameter_m, viscosity_cP, roughness_mm) {
    if (density_kg_m3 === 0 || velocity_mps === 0 || diameter_m === 0) {
        return { pressure_drop_bar_m: 0, friction_factor: 0, reynolds: 0 };
    }
    const viscosity_Pa_s = viscosity_cP * constants.CP_TO_PAS;
    const roughness_m = roughness_mm * constants.MM_TO_M;
    const reynolds = (density_kg_m3 * velocity_mps * diameter_m) / viscosity_Pa_s;
    let friction_factor;

    if (reynolds < 2300) { // Laminar
        friction_factor = 64 / reynolds;
    } else { // Turbulent - Haaland approximation
        const term = Math.pow((roughness_m / (3.7 * diameter_m)), 1.11) + (6.9 / reynolds);
        friction_factor = Math.pow(-1.8 * Math.log10(term), -2);
    }
    
    const pressure_drop_Pa_m = (friction_factor * density_kg_m3 * Math.pow(velocity_mps, 2)) / (2 * diameter_m);
    const pressure_drop_bar_m = pressure_drop_Pa_m * constants.PA_TO_BAR;
    
    return { pressure_drop_bar_m, friction_factor, reynolds };
}

function getLineFluidType(line) {
    if (!line || !line.Stream_Names || line.Stream_Names.length === 0) {
        return "Undefined";
    }
    const streamTypes = line.Stream_Names.map(name => currentProcessConditions[name]?.Fluid_Type);
    if (streamTypes.some(type => type === 'Multiphase' || !type)) {
        return "Multiphase";
    }
    const hasGas = streamTypes.includes("Gas");
    const hasLiquid = streamTypes.includes("Liquid");
    if (hasGas && hasLiquid) return "Multiphase";
    if (hasGas) return "Gas";
    if (hasLiquid) return "Liquid";
    return "Undefined";
}


// --- Main Calculation Logic ---

let allLineCalculationResults = [];

function performCalculations() {
    console.log("Performing calculations...");
    allLineCalculationResults = [];
    let consoleOutput = "";

    for (const streamName in currentProcessConditions) {
        const data = currentProcessConditions[streamName];
        data.Actual_Gas_Flow_m3_s = calculateActualFlowRateGas(data.Gas_Flow_Sm3_D, data.Pressure_kgf_cm2g, data.Temperature_C, data.Z_Factor);
        data.Actual_Light_Liquid_Flow_m3_s = calculateActualFlowRateLiquid(data.Light_Liquid_Flow_m3_D);
        data.Actual_Heavy_Liquid_Flow_m3_s = calculateActualFlowRateLiquid(data.Heavy_Liquid_Flow_m3_D);
    }

    for (const lineTag in currentLinesData) {
        const lineInfo = currentLinesData[lineTag];
        const { Selected_Diameter_ID, Stream_Names, Type, Design_Pressure_kgf_cm2g } = lineInfo;

        const diameterInfo = diametersData[Selected_Diameter_ID];
        if (!diameterInfo) {
            consoleOutput += `\nERROR: Diameter ID '${Selected_Diameter_ID}' for line '${lineTag}' not found.\n`;
            continue;
        }
        if (Stream_Names.length === 0) {
            consoleOutput += `\nERROR: Line '${lineTag}' has no associated streams.\n`;
            continue;
        }

        const { DE_mm, DI_mm, e_mm } = diameterInfo;
        const di_meters = DI_mm * constants.MM_TO_M;
        const flow_area_m2 = Math.PI * Math.pow((di_meters / 2), 2);
        const lineFluidType = getLineFluidType(lineInfo);

        consoleOutput += `\n=========================================================\n`;
        consoleOutput += `     CALCULATION MEMORANDUM - LINE: ${lineTag}\n`;
        consoleOutput += `=========================================================\n`;
        consoleOutput += `1. Line Data:\n`;
        consoleOutput += `    - Service Type: ${Type}, Fluid Type: ${lineFluidType}\n`;
        consoleOutput += `    - Design P.: ${Design_Pressure_kgf_cm2g.toFixed(2)} kgf/cm²g\n`;
        consoleOutput += `    - Diameter: ${Selected_Diameter_ID} (OD: ${DE_mm.toFixed(2)}mm, ID: ${DI_mm.toFixed(2)}mm, thk: ${e_mm.toFixed(2)}mm)\n`;
        consoleOutput += `    - Flow Area (A): ${flow_area_m2.toFixed(6)} m²\n`;

        const { t_required_mm } = calculateRequiredThickness(Design_Pressure_kgf_cm2g, DE_mm, designCriteria.allowable_stress_psi, designCriteria.quality_factor_E, designCriteria.temp_coefficient_Y, designCriteria.corrosion_allowance_mm);
        const thickness_check_status = e_mm >= t_required_mm ? "OK" : "NOT OK";
        
        let line_overall_status = thickness_check_status;
        let line_comments_aggregated = [];
        if (line_overall_status === "NOT OK") {
            line_comments_aggregated.push(`Wall thickness insufficient.`);
        }
        
        consoleOutput += `\n2. Mechanical Design Verification:\n`;
        consoleOutput += `    - Minimum Required Thickness (ASME B31.3): ${t_required_mm.toFixed(3)} mm -> **${thickness_check_status}**\n`;

        let pressure_check_status_overall = "OK";
        let pressure_comments = [];
        for (const streamName of Stream_Names) {
            const streamInfo = currentProcessConditions[streamName];
            if (!streamInfo) continue;
            const op_press = streamInfo.Pressure_kgf_cm2g;
            if (op_press > Design_Pressure_kgf_cm2g) {
                pressure_check_status_overall = "NOT OK";
                pressure_comments.push(`P.Op (${op_press.toFixed(2)}) > P.Design (${Design_Pressure_kgf_cm2g.toFixed(2)}) for ${streamName}.`);
            }
        }
        consoleOutput += `    - Pressure Verification: ${pressure_comments.length > 0 ? pressure_comments.join(' ') : `P.Operating <= P.Design for all streams.`} -> **${pressure_check_status_overall}**\n`;
        if(pressure_check_status_overall === "NOT OK") {
            line_overall_status = "NOT OK";
            line_comments_aggregated.push(...pressure_comments);
        }

        consoleOutput += `\n3. Flow Verification (for each operating scenario):\n`;

        let line_stream_specific_results = [];
        let flow_check_status_overall = "OK";
        let max_mach_for_line = 0;
        let max_dp_for_line = 0;
        let max_dp_10m_percent_for_line = 0;

        for (const streamName of Stream_Names) {
            const streamInfo = currentProcessConditions[streamName];
            if (!streamInfo) continue;

            consoleOutput += `\n  --- Operating Scenario: Stream '${streamName}' ---\n`;
            
            const actualGasFlow = streamInfo.Actual_Gas_Flow_m3_s;
            const actualLLFlow = streamInfo.Actual_Light_Liquid_Flow_m3_s;
            const actualHLFlow = streamInfo.Actual_Heavy_Liquid_Flow_m3_s;
            const totalActualFlow = actualGasFlow + actualLLFlow + actualHLFlow;

            const { Temperature_C, MW, Z_Factor, Gamma, Light_Liquid_Density_kg_m3, Heavy_Liquid_Density_kg_m3, Viscosity_cP } = streamInfo;
            const pressure_pa_abs = (streamInfo.Pressure_kgf_cm2g + constants.P_STANDARD_KGF_CM2A) * constants.KGFCMA_TO_PA;
            const temperature_k = Temperature_C + constants.CELSIUS_TO_KELVIN;
            const mw_kg_mol = MW / 1000;

            const gas_density_at_cond = calculateGasDensity(pressure_pa_abs, temperature_k, MW, Z_Factor);
            const { mixture_density } = calculateMixtureProperties(actualGasFlow, gas_density_at_cond, actualLLFlow, Light_Liquid_Density_kg_m3, actualHLFlow, Heavy_Liquid_Density_kg_m3);
            
            const velocity_mps = flow_area_m2 > 0 ? totalActualFlow / flow_area_m2 : 0;
            const rho_v2_calc = mixture_density * Math.pow(velocity_mps, 2);

            let stream_flow_status = "OK";
            let stream_comments = [];
            let mach_number = null;
            
            consoleOutput += `      - Hydraulic Verification:\n`;
            consoleOutput += `          - Mixture Density (ρ_m): ${mixture_density.toFixed(3)} kg/m³\n`;
            consoleOutput += `          - Velocity (V): ${velocity_mps.toFixed(2)} m/s\n`;
            consoleOutput += `          - RhoV² (ρ_m * V²): ${rho_v2_calc.toFixed(2)} kg/m·s²\n`;

            const { pressure_drop_bar_m, friction_factor, reynolds } = calculatePressureDrop(mixture_density, velocity_mps, di_meters, Viscosity_cP, designCriteria.pipe_roughness_mm);
            max_dp_for_line = Math.max(max_dp_for_line, pressure_drop_bar_m);
            consoleOutput += `          - Pressure Drop (dP/L): ${pressure_drop_bar_m.toExponential(3)} bar/m (Re: ${reynolds.toExponential(2)}, f: ${friction_factor.toFixed(4)})\n`;

            const pressure_in_bar = streamInfo.Pressure_kgf_cm2g * constants.KGFCM2_TO_BAR;
            const dp_10m_bar = pressure_drop_bar_m * 10;
            const dp_10m_percent = pressure_in_bar > 0 ? (dp_10m_bar / pressure_in_bar) * 100 : 0;
            max_dp_10m_percent_for_line = Math.max(max_dp_10m_percent_for_line, dp_10m_percent);

            if (Type === "CF") {
                let max_velocity_limit;
                if (lineFluidType === "Gas") max_velocity_limit = designCriteria.max_velocity_gas_mps;
                else if (lineFluidType === "Liquid") max_velocity_limit = designCriteria.max_velocity_liquid_mps;
                else max_velocity_limit = designCriteria.max_velocity_multiphase_mps;
                
                if (velocity_mps > max_velocity_limit) { stream_flow_status = "NOT OK"; stream_comments.push(`Velocity exceeds limit`); }
                if (lineFluidType !== "Liquid" && rho_v2_calc > designCriteria.max_rhov2_kg_per_m_s2) { stream_flow_status = "NOT OK"; stream_comments.push(`RhoV² exceeds limit`); }
            } else if (Type === "NNF") {
                const api14e_vel = calculateApi14eErosionalVelocity(designCriteria.api14e_c_factor_nnf, mixture_density);
                if (velocity_mps > api14e_vel) { stream_flow_status = "NOT OK"; stream_comments.push(`API 14E erosional velocity exceeded`); }
            } else if (Type === "VL") {
                const speed_of_sound = calculateSpeedOfSound(Gamma, Z_Factor, temperature_k, mw_kg_mol);
                mach_number = speed_of_sound > 0 ? velocity_mps / speed_of_sound : 0;
                max_mach_for_line = Math.max(max_mach_for_line, mach_number);
                
                consoleOutput += `          - Speed of Sound: ${speed_of_sound.toFixed(2)} m/s, Mach: ${mach_number.toFixed(3)}\n`;
                if (mach_number > designCriteria.max_mach_vent_lines) { stream_flow_status = "NOT OK"; stream_comments.push(`Mach exceeds limit`); }
            }
            
            if (stream_flow_status === "NOT OK") {
                flow_check_status_overall = "NOT OK";
                line_overall_status = "NOT OK";
                line_comments_aggregated.push(`Flow NOT OK for ${streamName}: ${stream_comments.join('. ')}`);
            }
            
            line_stream_specific_results.push({
                 "Stream Name": streamName, 
                 "Velocity (m/s)": velocity_mps,
                 "RhoV2 (kg/m.s²)": rho_v2_calc, 
                 "Flow Status": stream_flow_status,
                 "Mach Number": mach_number, 
                 "Pressure Drop (bar/m)": pressure_drop_bar_m,
                 "Pressure Drop 10m Percent": dp_10m_percent,
                 "Actual Gas Flow (m3/s)": actualGasFlow,
                 "Actual Light Liquid Flow (m3/s)": actualLLFlow,
                 "Actual Heavy Liquid Flow (m3/s)": actualHLFlow,
                 "Gas Density (kg/m3)": gas_density_at_cond,
                 "Mixture Density (kg/m3)": mixture_density
            });
        }

        consoleOutput += `\n4. Overall Line Verification Status: **${line_overall_status}**\n`;
        
        allLineCalculationResults.push({
            "Line TAG": lineTag, "Line Type": Type, "Line Fluid Type": lineFluidType,
            "Stream Names": Stream_Names.join(', '), "DN": diameterInfo.DN,
            "Selected Diameter ID": Selected_Diameter_ID, "ID (mm)": DI_mm, "OD (mm)": DE_mm,
            "Nominal Thickness (mm)": e_mm, "Design Pressure (kgf/cm²g)": Design_Pressure_kgf_cm2g,
            "Required Thickness (mm)": t_required_mm, "Thickness Check Status": thickness_check_status,
            "Pressure Check Status": pressure_check_status_overall,
            "Flow Check Status": flow_check_status_overall,
            "Overall Status": line_overall_status, "Comments": line_comments_aggregated.join("; "),
            "Mach Number": Type === 'VL' ? max_mach_for_line : null,
            "Pressure Drop (bar/m)": max_dp_for_line,
            "Pressure Drop 10m Percent": max_dp_10m_percent_for_line,
            "Stream Details": line_stream_specific_results
        });
    }

    document.getElementById('calculation-output').textContent = consoleOutput;
    renderEngineeringListTable(allLineCalculationResults);
    document.getElementById('download-csv-btn').disabled = false;
    document.getElementById('download-pdf-btn').disabled = false;
    document.getElementById('download-all-btn').disabled = false;
    document.getElementById('results-section').style.display = 'block';
}


// --- UI Management Functions ---

function displayProjectInfo() {
    const container = document.getElementById('project-info-display');
    container.innerHTML = `<ul>${Object.entries(projectInfo).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}</ul>`;
}

function displayDesignCriteria() {
    const container = document.getElementById('design-criteria-display');
    container.innerHTML = `
        <form id="design-criteria-form" class="box">
            <h4 class="title is-5">Flow Criteria</h4>
            <div class="columns is-multiline">
                <div class="column is-one-third"><div class="field"><label class="label">Max Gas Vel. (m/s)</label><div class="control"><input class="input" type="number" step="any" id="max_velocity_gas_mps" value="${designCriteria.max_velocity_gas_mps}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Max Liquid Vel. (m/s)</label><div class="control"><input class="input" type="number" step="any" id="max_velocity_liquid_mps" value="${designCriteria.max_velocity_liquid_mps}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Max Multiphase Vel. (m/s)</label><div class="control"><input class="input" type="number" step="any" id="max_velocity_multiphase_mps" value="${designCriteria.max_velocity_multiphase_mps}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Max RhoV² (kg/m·s²)</label><div class="control"><input class="input" type="number" step="any" id="max_rhov2_kg_per_m_s2" value="${designCriteria.max_rhov2_kg_per_m_s2}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Max Mach (VL)</label><div class="control"><input class="input" type="number" step="any" id="max_mach_vent_lines" value="${designCriteria.max_mach_vent_lines}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Pipe Roughness (mm)</label><div class="control"><input class="input" type="number" step="any" id="pipe_roughness_mm" value="${designCriteria.pipe_roughness_mm}"></div></div></div>
            </div>
            <h4 class="title is-5 mt-4">Thickness Criteria (ASME B31.3)</h4>
            <div class="columns is-multiline">
                <div class="column is-one-third"><div class="field"><label class="label">Allowable Stress (S) (psi)</label><div class="control"><input class="input" type="number" step="any" id="allowable_stress_psi" value="${designCriteria.allowable_stress_psi}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Quality Factor (E)</label><div class="control"><input class="input" type="number" step="any" id="quality_factor_E" value="${designCriteria.quality_factor_E}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Temp. Coefficient (Y)</label><div class="control"><input class="input" type="number" step="any" id="temp_coefficient_Y" value="${designCriteria.temp_coefficient_Y}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Corrosion (c) (mm)</label><div class="control"><input class="input" type="number" step="any" id="corrosion_allowance_mm" value="${designCriteria.corrosion_allowance_mm}"></div></div></div>
            </div>
            <div class="field is-grouped"><div class="control"><button type="submit" class="button is-link">Save Criteria</button></div></div>
        </form>`;
    
    document.getElementById('design-criteria-form').addEventListener('submit', function(event) {
        event.preventDefault();
        designCriteria.max_velocity_gas_mps = parseFloat(document.getElementById('max_velocity_gas_mps').value);
        designCriteria.max_velocity_liquid_mps = parseFloat(document.getElementById('max_velocity_liquid_mps').value);
        designCriteria.max_velocity_multiphase_mps = parseFloat(document.getElementById('max_velocity_multiphase_mps').value);
        designCriteria.max_rhov2_kg_per_m_s2 = parseFloat(document.getElementById('max_rhov2_kg_per_m_s2').value);
        designCriteria.max_mach_vent_lines = parseFloat(document.getElementById('max_mach_vent_lines').value);
        designCriteria.pipe_roughness_mm = parseFloat(document.getElementById('pipe_roughness_mm').value);
        designCriteria.allowable_stress_psi = parseFloat(document.getElementById('allowable_stress_psi').value);
        designCriteria.quality_factor_E = parseFloat(document.getElementById('quality_factor_E').value);
        designCriteria.temp_coefficient_Y = parseFloat(document.getElementById('temp_coefficient_Y').value);
        designCriteria.corrosion_allowance_mm = parseFloat(document.getElementById('corrosion_allowance_mm').value);
        alert("Design criteria saved.");
        displayDesignCriteria();
    });
}

function renderProcessConditionsTable() {
    const container = document.getElementById('process-conditions-display');
    let html = '<table class="table is-fullwidth is-striped is-hoverable"><thead><tr><th>Actions</th><th>Stream</th><th>Fluid Type</th><th>Actual Flow (m³/s)</th><th>Op. Pressure (kgf/cm²g)</th><th>Temp (°C)</th></tr></thead><tbody>';
    for (const streamName in currentProcessConditions) {
        const stream = currentProcessConditions[streamName];
        const fluidTypeClass = stream.Fluid_Type === 'Gas' ? 'fluid-gas' : stream.Fluid_Type === 'Liquid' ? 'fluid-liquid' : stream.Fluid_Type === 'Multiphase' ? 'fluid-multiphase' : 'fluid-undefined';
        
        const actualGasFlow = calculateActualFlowRateGas(stream.Gas_Flow_Sm3_D, stream.Pressure_kgf_cm2g, stream.Temperature_C, stream.Z_Factor);
        const actualLLFlow = calculateActualFlowRateLiquid(stream.Light_Liquid_Flow_m3_D);
        const actualHLFlow = calculateActualFlowRateLiquid(stream.Heavy_Liquid_Flow_m3_D);
        const totalActualFlow = actualGasFlow + actualLLFlow + actualHLFlow;

        html += `<tr data-stream-name="${streamName}">
            <td class="action-buttons">
                <button class="button is-small is-info is-outlined edit-pc-btn" title="Edit" data-stream-name="${streamName}"><span class="icon is-small"><i class="fas fa-edit"></i></span></button>
                <button class="button is-small is-link is-outlined copy-pc-btn" title="Copy" data-stream-name="${streamName}"><span class="icon is-small"><i class="fas fa-copy"></i></span></button>
                <button class="button is-small is-danger is-outlined delete-pc-btn" title="Delete" data-stream-name="${streamName}"><span class="icon is-small"><i class="fas fa-trash"></i></span></button>
            </td>
            <td><strong>${streamName}</strong></td>
            <td><span class="tag ${fluidTypeClass}">${stream.Fluid_Type}</span></td>
            <td>${totalActualFlow.toFixed(4)}</td>
            <td>${stream.Pressure_kgf_cm2g.toFixed(2)}</td>
            <td>${stream.Temperature_C.toFixed(1)}</td>
        </tr>`;
    }
    html += '</tbody></table>';
    container.innerHTML = html;
    document.querySelectorAll('.edit-pc-btn').forEach(b => b.addEventListener('click', loadProcessConditionForEdit));
    document.querySelectorAll('.copy-pc-btn').forEach(b => b.addEventListener('click', copyProcessCondition));
    document.querySelectorAll('.delete-pc-btn').forEach(b => b.addEventListener('click', deleteProcessCondition));
    populateStreamDropdown();
}

function loadProcessConditionForEdit(event) {
    const streamName = event.currentTarget.dataset.streamName;
    const stream = currentProcessConditions[streamName];
    const form = document.getElementById('process-condition-form');

    document.getElementById('pc-stream-name').value = streamName;
    document.getElementById('pc-gas-flow').value = stream.Gas_Flow_Sm3_D;
    document.getElementById('pc-pressure').value = stream.Pressure_kgf_cm2g;
    document.getElementById('pc-temperature').value = stream.Temperature_C;
    document.getElementById('pc-mw').value = stream.MW;
    document.getElementById('pc-z-factor').value = stream.Z_Factor;
    document.getElementById('pc-gamma').value = stream.Gamma;
    document.getElementById('pc-viscosity').value = stream.Viscosity_cP;
    document.getElementById('pc-light-liq-flow').value = stream.Light_Liquid_Flow_m3_D;
    document.getElementById('pc-light-liq-density').value = stream.Light_Liquid_Density_kg_m3;
    document.getElementById('pc-heavy-liq-flow').value = stream.Heavy_Liquid_Flow_m3_D;
    document.getElementById('pc-heavy-liq-density').value = stream.Heavy_Liquid_Density_kg_m3;
    
    form.dataset.originalName = streamName;
    document.getElementById('pc-stream-name').focus();
}

function copyProcessCondition(event) {
    const originalName = event.currentTarget.dataset.streamName;
    const originalStream = currentProcessConditions[originalName];
    
    let newName = `${originalName}_copy`;
    let counter = 1;
    while(currentProcessConditions[newName]) {
        newName = `${originalName}_copy_${counter}`;
        counter++;
    }

    currentProcessConditions[newName] = JSON.parse(JSON.stringify(originalStream));
    
    renderProcessConditionsTable();
    
    const newRow = document.querySelector(`tr[data-stream-name="${newName}"] .edit-pc-btn`);
    if(newRow) {
       newRow.click();
    }
}

function deleteProcessCondition(event) {
    const streamName = event.currentTarget.dataset.streamName;
    if (confirm(`Delete the stream '${streamName}'? It will also be removed from any associated lines.`)) {
        delete currentProcessConditions[streamName];
        for (const lineTag in currentLinesData) {
            currentLinesData[lineTag].Stream_Names = currentLinesData[lineTag].Stream_Names.filter(name => name !== streamName);
            if (currentLinesData[lineTag].Stream_Names.length === 0) {
                delete currentLinesData[lineTag];
            }
        }
        renderProcessConditionsTable();
        renderLinesTable();
    }
}

function renderLinesTable() {
    const container = document.getElementById('lines-display');
    let html = '<table class="table is-fullwidth is-striped is-hoverable"><thead><tr><th>Actions</th><th>TAG</th><th>Fluid Type</th><th>ID (m)</th><th>Area (m²)</th><th>Design P.</th><th>Stream(s)</th></tr></thead><tbody>';
    for (const lineTag in currentLinesData) {
        const line = currentLinesData[lineTag];
        const lineFluidType = getLineFluidType(line);
        const fluidTypeClass = lineFluidType === 'Gas' ? 'fluid-gas' : lineFluidType === 'Liquid' ? 'fluid-liquid' : lineFluidType === 'Multiphase' ? 'fluid-multiphase' : 'fluid-undefined';
        const diameterInfo = diametersData[line.Selected_Diameter_ID];
        const di_meters = diameterInfo ? diameterInfo.DI_mm * constants.MM_TO_M : 0;
        const flow_area_m2 = diameterInfo ? Math.PI * Math.pow((di_meters / 2), 2) : 0;

        html += `<tr data-line-tag="${lineTag}">
            <td class="action-buttons">
                <button class="button is-small is-info is-outlined edit-line-btn" title="Edit" data-line-tag="${lineTag}"><span class="icon is-small"><i class="fas fa-edit"></i></span></button>
                <button class="button is-small is-link is-outlined copy-line-btn" title="Copy" data-line-tag="${lineTag}"><span class="icon is-small"><i class="fas fa-copy"></i></span></button>
                <button class="button is-small is-danger is-outlined delete-line-btn" title="Delete" data-line-tag="${lineTag}"><span class="icon is-small"><i class="fas fa-trash"></i></span></button>
            </td>
            <td><strong>${lineTag}</strong></td>
            <td><span class="tag ${fluidTypeClass}">${lineFluidType}</span></td>
            <td>${di_meters.toFixed(4)}</td>
            <td>${flow_area_m2.toFixed(6)}</td>
            <td>${(line.Design_Pressure_kgf_cm2g || 0).toFixed(2)}</td>
            <td>${line.Stream_Names.join(', ')}</td>
        </tr>`;
    }
    html += '</tbody></table>';
    container.innerHTML = html;
    document.querySelectorAll('.edit-line-btn').forEach(b => b.addEventListener('click', loadLineForEdit));
    document.querySelectorAll('.copy-line-btn').forEach(b => b.addEventListener('click', copyLine));
    document.querySelectorAll('.delete-line-btn').forEach(b => b.addEventListener('click', deleteLine));
}

function loadLineForEdit(event) {
    const lineTag = event.currentTarget.dataset.lineTag;
    const line = currentLinesData[lineTag];
    const form = document.getElementById('line-form');

    document.getElementById('line-tag').value = lineTag;
    document.getElementById('line-design-pressure').value = line.Design_Pressure_kgf_cm2g || 0;
    document.getElementById('line-type').value = line.Type;
    const streamSelect = document.getElementById('line-stream-name');
    Array.from(streamSelect.options).forEach(opt => opt.selected = line.Stream_Names.includes(opt.value));
    document.getElementById('line-diameter-id').value = line.Selected_Diameter_ID;
    
    form.dataset.originalTag = lineTag;
    document.getElementById('line-tag').focus();
    suggestPipeDiameter();
}

function copyLine(event) {
    const originalTag = event.currentTarget.dataset.lineTag;
    const originalLine = currentLinesData[originalTag];

    let newTag = `${originalTag}_copy`;
    let counter = 1;
    while(currentLinesData[newTag]) {
        newTag = `${originalTag}_copy_${counter}`;
        counter++;
    }

    currentLinesData[newTag] = JSON.parse(JSON.stringify(originalLine));

    renderLinesTable();

    const newRow = document.querySelector(`tr[data-line-tag="${newTag}"] .edit-line-btn`);
    if(newRow) {
        newRow.click();
    }
}

function deleteLine(event) {
    const lineTag = event.currentTarget.dataset.lineTag;
    if (confirm(`Delete the line '${lineTag}'?`)) {
        delete currentLinesData[lineTag];
        renderLinesTable();
    }
}

function populateStreamDropdown() {
    const select = document.getElementById('line-stream-name');
    const selectedValues = Array.from(select.selectedOptions).map(opt => opt.value);
    select.innerHTML = '';
    for (const streamName in currentProcessConditions) {
        const option = document.createElement('option');
        option.value = streamName;
        option.textContent = `${streamName} (${currentProcessConditions[streamName].Fluid_Type})`;
        if (selectedValues.includes(streamName)) {
            option.selected = true;
        }
        select.appendChild(option);
    }
    if (Object.keys(currentProcessConditions).length === 0) {
        select.innerHTML = '<option value="" disabled>No streams available</option>';
    }
}

function populateDiameterDropdown() {
    const select = document.getElementById('line-diameter-id');
    select.innerHTML = '<option value="">Select Diameter</option>';
    for (const diameterId in diametersData) {
        const option = document.createElement('option');
        option.value = diameterId;
        option.textContent = `${diameterId} (ID: ${diametersData[diameterId].DI_mm}mm, thk: ${diametersData[diameterId].e_mm}mm)`;
        select.appendChild(option);
    }
}

function renderEngineeringListTable(results) {
    const container = document.getElementById('engineering-list-table');
    if (results.length === 0) {
        container.innerHTML = '<p class="has-text-grey">No results to display.</p>';
        return;
    }
    const headers = ["View", "Line", "Fluid Type", "Diameter", "Thk. Check", "Flow Check", "Mach", "dP/L (bar/m)", "dP (10m) [%]", "Overall Status", "Comments"];
    let html = `<table class="table is-fullwidth is-bordered is-striped is-narrow is-hoverable"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;

    results.forEach((row, index) => {
        const thicknessStatusClass = row["Thickness Check Status"] === 'OK' ? 'status-ok' : 'status-no-ok';
        const flowStatusClass = row["Flow Check Status"] === 'OK' ? 'status-ok' : 'status-no-ok';
        const overallStatusClass = row["Overall Status"] === 'OK' ? 'status-ok' : 'status-no-ok';
        const mach = row["Mach Number"];
        const dp = row["Pressure Drop (bar/m)"];
        const dp_10m_percent = row["Pressure Drop 10m Percent"];

        html += `
            <tr>
                <td><button class="button is-small is-info is-outlined toggle-details-btn" data-target="details-${index}"><span class="icon is-small"><i class="fas fa-eye"></i></span></button></td>
                <td><strong>${row["Line TAG"]}</strong></td>
                <td>${row["Line Fluid Type"]}</td>
                <td>${row["Selected Diameter ID"]}</td>
                <td class="${thicknessStatusClass}">${row["Thickness Check Status"]}</td>
                <td class="${flowStatusClass}">${row["Flow Check Status"]}</td>
                <td>${mach !== null ? mach.toFixed(3) : 'N/A'}</td>
                <td>${dp !== null ? dp.toExponential(3) : 'N/A'}</td>
                <td>${dp_10m_percent !== null ? dp_10m_percent.toFixed(2) + '%' : 'N/A'}</td>
                <td class="${overallStatusClass}">${row["Overall Status"]}</td>
                <td>${row["Comments"]}</td>
            </tr>
            <tr id="details-${index}" class="line-details-row is-hidden"><td colspan="${headers.length}"><div class="box">`;
        
        html += `<h4 class="title is-6">Flow Verification Details by Stream</h4>
                 <table class="table is-fullwidth is-bordered"><thead><tr><th>Stream</th><th>Velocity (m/s)</th><th>RhoV² (kg/m.s²)</th><th>Mach</th><th>dP/L (bar/m)</th><th>dP (10m) [%]</th><th>Flow Status</th></tr></thead><tbody>`;
        row["Stream Details"].forEach(sd => {
            html += `<tr>
                        <td>${sd["Stream Name"]}</td>
                        <td>${sd["Velocity (m/s)"].toFixed(2)}</td>
                        <td>${sd["RhoV2 (kg/m.s²)"].toFixed(2)}</td>
                        <td>${sd["Mach Number"] !== null ? sd["Mach Number"].toFixed(3) : 'N/A'}</td>
                        <td>${sd["Pressure Drop (bar/m)"] !== null ? sd["Pressure Drop (bar/m)"].toExponential(3) : 'N/A'}</td>
                        <td>${sd["Pressure Drop 10m Percent"] !== null ? sd["Pressure Drop 10m Percent"].toFixed(2) + '%' : 'N/A'}</td>
                        <td class="${sd["Flow Status"] === 'OK' ? 'status-ok' : 'status-no-ok'}">${sd["Flow Status"]}</td>
                    </tr>`;
        });
        html += `</tbody></table></div></td></tr>`;
    });
    html += '</tbody></table>';
    container.innerHTML = html;

    document.querySelectorAll('.toggle-details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetRow = document.getElementById(button.dataset.target);
            targetRow.classList.toggle('is-hidden');
            const icon = button.querySelector('.fas');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    });
}


// --- Download Functions ---

function getFormattedFileName(extension) {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateStr = `${day}_${month}_${year}`;
    
    const projectName = (projectInfo["Project Name"] || "Project").replace(/[^a-z0-9]/gi, '_');
    const projectNumber = (projectInfo["Project Number"] || "Num").replace(/[^a-z0-9]/gi, '_');

    return `${projectNumber}-${projectName}-${dateStr}.${extension}`;
}

function downloadCSV() {
    if (allLineCalculationResults.length === 0) { alert("No data to export."); return; }
    const headers = [
        "Line TAG", "Line Type", "Line Fluid Type", "Selected Diameter ID", "ID (mm)", "OD (mm)", "Nominal Thickness (mm)",
        "Design Pressure (kgf/cm²g)", "Required Thickness (mm)", "Thickness Check Status", "Flow Check Status", 
        "Mach Number", "Pressure Drop (bar/m)", "Pressure Drop 10m Percent", "Overall Status", "Comments"
    ];
    let csv = headers.join(',') + '\n';
    allLineCalculationResults.forEach(row => {
        const values = headers.map(header => {
            let value = row[header];
            if (typeof value === 'number') value = value.toFixed(5);
            return `"${String(value === null ? 'N/A' : value).replace(/"/g, '""')}"`;
        });
        csv += values.join(',') + '\n';
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', getFormattedFileName('csv'));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPDF() {
    if (allLineCalculationResults.length === 0) {
        alert("No data to export.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 40;
    let finalY = 0;
    let pageNumber = 1;

    const addHeaderFooter = () => {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("LINE CALCULATION MEMORANDUM", pageWidth / 2, 40, { align: 'center' });
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(`Page ${pageNumber}`, pageWidth - margin, pageHeight - 20, { align: 'right' });
        doc.text(projectInfo["Date"], margin, pageHeight - 20);
    };

    const checkNewPage = (requiredHeight) => {
        if (finalY + requiredHeight > pageHeight - 60) {
            doc.addPage();
            pageNumber++;
            addHeaderFooter();
            finalY = 80;
        }
    };
    
    // --- TITLE PAGE ---
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text("Line Calculation Memorandum", pageWidth / 2, pageHeight / 2 - 60, { align: 'center' });
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(`Project: ${projectInfo["Project Name"]}`, pageWidth / 2, pageHeight / 2 - 30, { align: 'center' });
    doc.text(`Number: ${projectInfo["Project Number"]}`, pageWidth / 2, pageHeight / 2 - 10, { align: 'center' });
    doc.text(`Client: ${projectInfo["Client"]}`, pageWidth / 2, pageHeight / 2 + 10, { align: 'center' });
    addHeaderFooter();

    // --- CRITERIA PAGE ---
    doc.addPage();
    pageNumber++;
    addHeaderFooter();
    finalY = 80;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text("1. Applied Design Criteria", margin, finalY);
    finalY += 20;

    const criteriaBody = [
        [{ content: 'Flow Criteria', colSpan: 2, styles: { halign: 'center', fillColor: [220, 220, 220] } }],
        ["Maximum Gas Velocity (CF)", `${designCriteria.max_velocity_gas_mps} m/s`],
        ["Maximum Liquid Velocity (CF)", `${designCriteria.max_velocity_liquid_mps} m/s`],
        ["Maximum Multiphase Velocity (CF)", `${designCriteria.max_velocity_multiphase_mps} m/s`],
        ["Maximum RhoV²", `${designCriteria.max_rhov2_kg_per_m_s2} kg/(m·s²)`],
        ["Maximum Mach (VL)", `${designCriteria.max_mach_vent_lines}`],
        ["Pipe Roughness", `${designCriteria.pipe_roughness_mm} mm`],
        [{ content: 'Thickness Criteria (ASME B31.3)', colSpan: 2, styles: { halign: 'center', fillColor: [220, 220, 220] } }],
        ["Allowable Stress (S)", `${designCriteria.allowable_stress_psi} psi`],
        ["Joint Quality Factor (E)", `${designCriteria.quality_factor_E}`],
        ["Temperature Coefficient (Y)", `${designCriteria.temp_coefficient_Y}`],
        ["Corrosion Allowance (c)", `${designCriteria.corrosion_allowance_mm} mm`]
    ];
    doc.autoTable({ startY: finalY, body: criteriaBody, theme: 'grid', styles: { fontSize: 9 }, headStyles: { fontStyle: 'bold', fontSize: 10 }, columnStyles: { 0: { fontStyle: 'bold', cellWidth: 200 } } });
    finalY = doc.autoTable.previous.finalY;

    // --- FORMULAS PAGE ---
    doc.addPage();
    pageNumber++;
    addHeaderFooter();
    finalY = 80;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text("2. Formulas Used", margin, finalY);
    finalY += 25;
    
    const formulas = [
        { title: "Required Thickness (ASME B31.3)", formula: "t_req = (P * D_o) / (2 * (S*E + P*Y)) + c" },
        { title: "Actual Gas Flow", formula: "Q_act = Q_std * (P_std / P_act) * (T_act / T_std) * Z" },
        { title: "Fluid Velocity", formula: "V = Q_total_act / A" },
        { title: "Pressure Drop (Darcy-Weisbach)", formula: "dP/L = (f * rho * V^2) / (2 * D_i)" },
        { title: "Reynolds Number", formula: "Re = (rho * V * D_i) / mu" },
        { title: "Friction Factor (Haaland)", formula: "1/sqrt(f) = -1.8 * log10( (eps/(3.7*D_i))^1.11 + 6.9/Re )" },
        { title: "Speed of Sound (Gas)", formula: "a = sqrt(gamma * Z * R * T / MW)" },
        { title: "Mach Number", formula: "Ma = V / a" },
    ];

    doc.setFontSize(9);
    formulas.forEach(f => {
        checkNewPage(40);
        doc.setFont('helvetica', 'bold');
        doc.text(f.title, margin, finalY);
        finalY += 12;
        doc.setFont('courier', 'normal');
        doc.text(f.formula, margin + 10, finalY);
        finalY += 20;
    });

    // --- RESULTS PAGES ---
    doc.addPage();
    pageNumber++;
    addHeaderFooter();
    finalY = 80;

    allLineCalculationResults.forEach((line, index) => {
        checkNewPage(20);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(`3.${index + 1} Line Verification: ${line['Line TAG']}`, margin, finalY);
        finalY += 20;

        // --- Line General Data ---
        checkNewPage(60);
        const lineDataBody = [
            ['Service Type', line['Line Type'], 'Fluid Type', line['Line Fluid Type']],
            ['Diameter', line['Selected Diameter ID'], 'Flow Area (A)', `${(Math.PI * Math.pow(line['ID (mm)'] * constants.MM_TO_M / 2, 2)).toFixed(6)} m²`],
            ['Design P. (P)', `${line['Design Pressure (kgf/cm²g)']} kgf/cm²g`, 'OD', `${line['OD (mm)']} mm`]
        ];
        doc.autoTable({ startY: finalY, body: lineDataBody, theme: 'grid', styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { fontStyle: 'bold' }, 2: { fontStyle: 'bold' } } });
        finalY = doc.autoTable.previous.finalY + 15;

        // --- ASME B31.3 Thickness Calculation ---
        checkNewPage(100);
        const { t_required_mm, t_pressure_mm } = calculateRequiredThickness(line['Design Pressure (kgf/cm²g)'], line['OD (mm)'], designCriteria.allowable_stress_psi, designCriteria.quality_factor_E, designCriteria.temp_coefficient_Y, designCriteria.corrosion_allowance_mm);
        const thickness_status_color = line['Thickness Check Status'] === 'OK' ? [0, 128, 0] : [255, 0, 0];
        const asmeBody = [
            [{ content: 'ASME B31.3 Thickness Calculation', colSpan: 2, styles: { halign: 'center', fillColor: [230, 230, 230] } }],
            ['Pressure Thickness (t_p)', `${t_pressure_mm.toFixed(3)} mm`],
            ['Corrosion Allowance (c)', `${designCriteria.corrosion_allowance_mm.toFixed(3)} mm`],
            ['Required Thickness (t_req)', `${t_required_mm.toFixed(3)} mm`],
            ['Nominal Thickness (t_nom)', `${line['Nominal Thickness (mm)'].toFixed(3)} mm`],
            ['Result', { content: line['Thickness Check Status'], styles: { textColor: thickness_status_color } }]
        ];
        doc.autoTable({ startY: finalY, body: asmeBody, theme: 'grid', styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { fontStyle: 'bold' } } });
        finalY = doc.autoTable.previous.finalY + 15;

        // --- For each stream ---
        line['Stream Details'].forEach(sd => {
            const streamInfo = currentProcessConditions[sd['Stream Name']];
            if (!streamInfo) return;
            
            checkNewPage(20);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text(`Operating Scenario: ${sd['Stream Name']}`, margin, finalY);
            finalY += 15;

            // --- Stream Conditions ---
            checkNewPage(80);
            const streamConditionsBody = [
                [{ content: `Standard Stream Conditions - ${sd['Stream Name']}`, colSpan: 4, styles: { halign: 'center', fillColor: [230, 230, 230] } }],
                ['Std Gas Flow', `${streamInfo.Gas_Flow_Sm3_D.toFixed(2)} Sm³/D`, 'Std Liquid Flow', `${(streamInfo.Light_Liquid_Flow_m3_D + streamInfo.Heavy_Liquid_Flow_m3_D).toFixed(2)} m³/D`],
                ['Op. Pressure', `${streamInfo.Pressure_kgf_cm2g.toFixed(2)} kgf/cm²g`, 'Op. Temperature', `${streamInfo.Temperature_C.toFixed(2)} °C`],
                ['MW', `${streamInfo.MW.toFixed(2)}`, 'Z Factor', `${streamInfo.Z_Factor.toFixed(3)}`],
            ];
            doc.autoTable({ startY: finalY, body: streamConditionsBody, theme: 'grid', styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { fontStyle: 'bold' }, 2: { fontStyle: 'bold' } } });
            finalY = doc.autoTable.previous.finalY + 15;
            
            // --- Actual Flow Conditions & Densities ---
            checkNewPage(100);
            const totalActualFlow = sd['Actual Gas Flow (m3/s)'] + sd['Actual Light Liquid Flow (m3/s)'] + sd['Actual Heavy Liquid Flow (m3/s)'];
            const actualFlowBody = [
                [{ content: `Actual Flow Conditions & Densities - ${sd['Stream Name']}`, colSpan: 2, styles: { halign: 'center', fillColor: [230, 230, 230] } }],
                ['Actual Gas Flow', `${sd['Actual Gas Flow (m3/s)'].toFixed(4)} m³/s`],
                ['Actual Light Liquid Flow', `${sd['Actual Light Liquid Flow (m3/s)'].toFixed(4)} m³/s`],
                ['Actual Heavy Liquid Flow', `${sd['Actual Heavy Liquid Flow (m3/s)'].toFixed(4)} m³/s`],
                ['Total Actual Flow', `${totalActualFlow.toFixed(4)} m³/s`],
                ['Gas Density @ Conditions', `${sd['Gas Density (kg/m3)'].toFixed(3)} kg/m³`],
                ['Mixture Density @ Conditions', `${sd['Mixture Density (kg/m3)'].toFixed(3)} kg/m³`],
            ];
            doc.autoTable({ startY: finalY, body: actualFlowBody, theme: 'grid', styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { fontStyle: 'bold' } } });
            finalY = doc.autoTable.previous.finalY + 15;


            // --- Hydraulic Calculation Details ---
            checkNewPage(120);
            const flowVerificationBody = [
                 [{ content: `Flow Verification - ${sd['Stream Name']}`, colSpan: 3, styles: { halign: 'center', fillColor: [230, 230, 230] } }],
                 ['Parameter', 'Calculated', 'Limit / Result']
            ];
            const flow_status_color = sd['Flow Status'] === 'OK' ? [0, 128, 0] : [255, 0, 0];
            
            // Velocity
            let velocityLimit = 'N/A';
            if (line.Type === "CF") {
                if (line.LineFluidType === "Gas") velocityLimit = designCriteria.max_velocity_gas_mps;
                else if (line.LineFluidType === "Liquid") velocityLimit = designCriteria.max_velocity_liquid_mps;
                else velocityLimit = designCriteria.max_velocity_multiphase_mps;
            } else if (line.Type === "NNF") {
                 velocityLimit = calculateApi14eErosionalVelocity(designCriteria.api14e_c_factor_nnf, sd['Mixture Density (kg/m3)']);
            }
            flowVerificationBody.push(['Velocity', `${sd['Velocity (m/s)'].toFixed(2)} m/s`, `${typeof velocityLimit === 'number' ? velocityLimit.toFixed(2) + ' m/s' : velocityLimit}`]);

            // RhoV2
            if (line.LineFluidType !== "Liquid") {
                flowVerificationBody.push(['RhoV²', `${sd['RhoV2 (kg/m.s²)'].toFixed(2)} kg/m·s²`, `${designCriteria.max_rhov2_kg_per_m_s2} kg/m·s²`]);
            }

            // Mach
            if (line.Type === 'VL' && sd['Mach Number'] !== null) {
                const temperature_k = streamInfo.Temperature_C + constants.CELSIUS_TO_KELVIN;
                const speed_of_sound = calculateSpeedOfSound(streamInfo.Gamma, streamInfo.Z_Factor, temperature_k, streamInfo.MW/1000);
                flowVerificationBody.push(['Speed of Sound', `${speed_of_sound.toFixed(2)} m/s`, '']);
                flowVerificationBody.push(['Mach Number', `${sd['Mach Number'].toFixed(3)}`, `${designCriteria.max_mach_vent_lines}`]);
            }
            
            // Pressure Drop
            flowVerificationBody.push(['Pressure Drop (dP/L)', `${sd['Pressure Drop (bar/m)'].toExponential(3)} bar/m`, '']);
            flowVerificationBody.push(['Flow Status', '', { content: sd['Flow Status'], styles: { textColor: flow_status_color } } ]);

            doc.autoTable({ startY: finalY, head: [], body: flowVerificationBody, theme: 'grid', styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { fontStyle: 'bold' } } });
            finalY = doc.autoTable.previous.finalY + 15;
        });

        // --- Overall Status ---
        checkNewPage(40);
        doc.autoTable({
            startY: finalY,
            body: [[{content: 'Overall Line Status', styles: {fontStyle: 'bold'}}, {content: line['Overall Status'], styles: {textColor: line['Overall Status'] === 'OK' ? [0, 128, 0] : [255, 0, 0]}}]],
            theme: 'grid',
            styles: { fontSize: 10, cellPadding: 4 }
        });
        finalY = doc.autoTable.previous.finalY;

        if (index < allLineCalculationResults.length - 1) {
             doc.addPage();
             pageNumber++;
             addHeaderFooter();
             finalY = 80;
        }
    });

    doc.save(getFormattedFileName('pdf'));
}


// --- Project Save/Load Functions ---

function saveProjectData() {
    const projectData = { projectInfo, processConditions: currentProcessConditions, linesData: currentLinesData, designCriteria };
    const dataStr = JSON.stringify(projectData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = getFormattedFileName('json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

function loadProjectData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const loadedData = JSON.parse(e.target.result);
            projectInfo = loadedData.projectInfo || projectInfo;
            currentProcessConditions = loadedData.processConditions || {};
            currentLinesData = loadedData.linesData || {};
            Object.assign(designCriteria, loadedData.designCriteria);
            
            for (const lineTag in currentLinesData) {
                if (!currentLinesData[lineTag].hasOwnProperty('Design_Pressure_kgf_cm2g')) {
                    currentLinesData[lineTag].Design_Pressure_kgf_cm2g = 0;
                }
            }

            document.getElementById('project-name').value = projectInfo["Project Name"];
            document.getElementById('project-number').value = projectInfo["Project Number"];
            document.getElementById('client').value = projectInfo["Client"];
            document.getElementById('prepared-by').value = projectInfo["Prepared by"];
            document.getElementById('reviewed-by').value = projectInfo["Reviewed by"];
            
            displayProjectInfo();
            displayDesignCriteria();
            renderProcessConditionsTable();
            renderLinesTable();
            
            document.getElementById('results-section').style.display = 'none';
            document.getElementById('download-csv-btn').disabled = true;
            document.getElementById('download-pdf-btn').disabled = true;
            document.getElementById('download-all-btn').disabled = true;
            alert("Project loaded successfully.");
        } catch (error) {
            alert(`Error loading JSON file: ${error.message}.`);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}


// --- Event Listeners and Initial Display ---

document.addEventListener('DOMContentLoaded', () => {
    displayProjectInfo();
    displayDesignCriteria();
    renderProcessConditionsTable();
    renderLinesTable();
    populateDiameterDropdown();

    document.getElementById('project-name').value = projectInfo["Project Name"];
    document.getElementById('project-number').value = projectInfo["Project Number"];
    document.getElementById('client').value = projectInfo["Client"];
    document.getElementById('prepared-by').value = projectInfo["Prepared by"];
    document.getElementById('reviewed-by').value = projectInfo["Reviewed by"];

    document.querySelectorAll('.card-header.is-clickable').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.closest('.card').querySelector('.card-content');
            content.classList.toggle('is-hidden');
            const icon = header.querySelector('.fas');
            icon.classList.toggle('fa-angle-down');
            icon.classList.toggle('fa-angle-up');
        });
    });

    document.getElementById('project-info-form').addEventListener('submit', function(event) {
        event.preventDefault();
        projectInfo["Project Name"] = document.getElementById('project-name').value.trim();
        projectInfo["Project Number"] = document.getElementById('project-number').value.trim();
        projectInfo["Client"] = document.getElementById('client').value.trim();
        projectInfo["Prepared by"] = document.getElementById('prepared-by').value.trim();
        projectInfo["Reviewed by"] = document.getElementById('reviewed-by').value.trim();
        projectInfo["Date"] = new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
        displayProjectInfo();
        alert("Project information saved.");
    });

    document.getElementById('process-condition-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const form = this;
        const newStreamName = document.getElementById('pc-stream-name').value.trim();
        const originalStreamName = form.dataset.originalName;

        if (!newStreamName) {
            alert("Stream name is required.");
            return;
        }

        const gasFlow = parseFloat(document.getElementById('pc-gas-flow').value) || 0;
        const lightLiqFlow = parseFloat(document.getElementById('pc-light-liq-flow').value) || 0;
        const heavyLiqFlow = parseFloat(document.getElementById('pc-heavy-liq-flow').value) || 0;
        const totalLiqFlow = lightLiqFlow + heavyLiqFlow;

        let fluidType = "Gas";
        if (gasFlow > 0 && totalLiqFlow > 0) fluidType = "Multiphase";
        else if (gasFlow === 0 && totalLiqFlow > 0) fluidType = "Liquid";

        const streamData = {
            Gas_Flow_Sm3_D: gasFlow,
            Pressure_kgf_cm2g: parseFloat(document.getElementById('pc-pressure').value) || 0,
            Temperature_C: parseFloat(document.getElementById('pc-temperature').value) || 0,
            MW: parseFloat(document.getElementById('pc-mw').value) || 0,
            Z_Factor: parseFloat(document.getElementById('pc-z-factor').value) || 1,
            Gamma: parseFloat(document.getElementById('pc-gamma').value) || 1.3,
            Viscosity_cP: parseFloat(document.getElementById('pc-viscosity').value) || 0.012,
            Light_Liquid_Flow_m3_D: lightLiqFlow,
            Light_Liquid_Density_kg_m3: parseFloat(document.getElementById('pc-light-liq-density').value) || 0,
            Heavy_Liquid_Flow_m3_D: heavyLiqFlow,
            Heavy_Liquid_Density_kg_m3: parseFloat(document.getElementById('pc-heavy-liq-density').value) || 0,
            Fluid_Type: fluidType
        };

        if (originalStreamName && originalStreamName !== newStreamName) {
            if (currentProcessConditions[newStreamName]) {
                alert(`Error: Stream '${newStreamName}' already exists. Please choose another name.`);
                return;
            }
            currentProcessConditions[newStreamName] = streamData;
            delete currentProcessConditions[originalStreamName];

            for (const lineTag in currentLinesData) {
                const line = currentLinesData[lineTag];
                const streamIndex = line.Stream_Names.indexOf(originalStreamName);
                if (streamIndex > -1) {
                    line.Stream_Names[streamIndex] = newStreamName;
                }
            }
        } else {
            if (currentProcessConditions[newStreamName] && !originalStreamName) {
                 alert(`Error: Stream '${newStreamName}' already exists. Please choose another name.`);
                return;
            }
            currentProcessConditions[newStreamName] = streamData;
        }

        renderProcessConditionsTable();
        renderLinesTable();
        form.reset();
        delete form.dataset.originalName;
    });

    document.getElementById('pc-clear-form-btn').addEventListener('click', () => {
        const form = document.getElementById('process-condition-form');
        form.reset();
        delete form.dataset.originalName;
    });

    document.getElementById('line-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const form = this;
        const newLineTag = document.getElementById('line-tag').value.trim();
        const originalLineTag = form.dataset.originalTag;

        if (!newLineTag) {
            alert("Line TAG is required.");
            return;
        }

        const selectedStreamNames = Array.from(document.getElementById('line-stream-name').selectedOptions).map(opt => opt.value);
        if (selectedStreamNames.length === 0) {
            alert("You must select at least one stream.");
            return;
        }

        const lineData = {
            "Selected_Diameter_ID": document.getElementById('line-diameter-id').value,
            "Stream_Names": selectedStreamNames,
            "Type": document.getElementById('line-type').value,
            "Design_Pressure_kgf_cm2g": parseFloat(document.getElementById('line-design-pressure').value) || 0,
        };

        if (originalLineTag && originalLineTag !== newLineTag) {
            if (currentLinesData[newLineTag]) {
                alert(`Error: Line with TAG '${newLineTag}' already exists. Please choose another TAG.`);
                return;
            }
            currentLinesData[newLineTag] = lineData;
            delete currentLinesData[originalLineTag];
        } else {
             if (currentLinesData[newLineTag] && !originalLineTag) {
                alert(`Error: Line with TAG '${newLineTag}' already exists. Please choose another TAG.`);
                return;
            }
            currentLinesData[newLineTag] = lineData;
        }

        renderLinesTable();
        form.reset();
        delete form.dataset.originalTag;
    });

    document.getElementById('line-clear-form-btn').addEventListener('click', () => {
        const form = document.getElementById('line-form');
        form.reset();
        delete form.dataset.originalTag;
        suggestPipeDiameter();
    });
    
    document.getElementById('delete-all-streams-btn').addEventListener('click', () => {
        if(confirm("Are you sure you want to delete ALL streams? This action will also delete all associated lines.")) {
            currentProcessConditions = {};
            currentLinesData = {};
            renderProcessConditionsTable();
            renderLinesTable();
        }
    });

    document.getElementById('delete-all-lines-btn').addEventListener('click', () => {
        if(confirm("Are you sure you want to delete ALL lines?")) {
            currentLinesData = {};
            renderLinesTable();
        }
    });

    document.getElementById('calculate-btn').addEventListener('click', performCalculations);
    document.getElementById('save-project-btn').addEventListener('click', () => {
        saveProjectData();
        alert("Project saved successfully.");
    });
    document.getElementById('load-project-btn').addEventListener('click', () => document.getElementById('load-project-file-input').click());
    document.getElementById('load-project-file-input').addEventListener('change', loadProjectData);
    document.getElementById('download-csv-btn').addEventListener('click', downloadCSV);
    document.getElementById('download-pdf-btn').addEventListener('click', downloadPDF);
    document.getElementById('download-all-btn').addEventListener('click', () => {
        saveProjectData();
        downloadCSV();
        downloadPDF();
    });
    document.getElementById('reset-data-btn').addEventListener('click', () => {
        if (confirm("Reset all data to its initial values?")) {
            currentProcessConditions = JSON.parse(JSON.stringify(originalProcessConditions));
            currentLinesData = JSON.parse(JSON.stringify(originalLinesData));
            renderProcessConditionsTable();
            renderLinesTable();
            document.getElementById('results-section').style.display = 'none';
        }
    });

    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = darkModeToggle.querySelector('i');

    const setTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    };

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(currentTheme);
    });

    // Set initial theme based on saved preference or system setting
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    }

    // --- Line Suggestion ---
    document.getElementById('line-stream-name').addEventListener('change', suggestPipeDiameter);
    document.getElementById('line-type').addEventListener('change', suggestPipeDiameter);
});

function suggestPipeDiameter() {
    const suggestionEl = document.getElementById('line-suggestion-display');
    const selectedStreamNames = Array.from(document.getElementById('line-stream-name').selectedOptions).map(opt => opt.value);
    const lineType = document.getElementById('line-type').value;

    if (selectedStreamNames.length === 0 || !lineType) {
        suggestionEl.textContent = '';
        return;
    }

    let maxRequiredDI_mm = 0;

    for (const streamName of selectedStreamNames) {
        const streamInfo = currentProcessConditions[streamName];
        if (!streamInfo) continue;

        const actualGasFlow = calculateActualFlowRateGas(streamInfo.Gas_Flow_Sm3_D, streamInfo.Pressure_kgf_cm2g, streamInfo.Temperature_C, streamInfo.Z_Factor);
        const actualLLFlow = calculateActualFlowRateLiquid(streamInfo.Light_Liquid_Flow_m3_D);
        const actualHLFlow = calculateActualFlowRateLiquid(streamInfo.Heavy_Liquid_Flow_m3_D);
        const totalActualFlow = actualGasFlow + actualLLFlow + actualHLFlow;

        if (totalActualFlow === 0) continue;
        
        const lineFluidType = getLineFluidType({ Stream_Names: [streamName] });
        let requiredArea_m2 = 0;
        let requiredArea_by_Velocity = 0;
        let requiredArea_by_RhoV2 = 0;

        if (lineType === 'VL') {
            const { Temperature_C, MW, Z_Factor, Gamma } = streamInfo;
            const temperature_k = Temperature_C + constants.CELSIUS_TO_KELVIN;
            const mw_kg_mol = MW / 1000;
            const speed_of_sound = calculateSpeedOfSound(Gamma, Z_Factor, temperature_k, mw_kg_mol);
            const velocityLimit = designCriteria.max_mach_vent_lines * speed_of_sound;
            if (velocityLimit > 0) {
                requiredArea_by_Velocity = totalActualFlow / velocityLimit;
            }
        } else {
            let velocityLimit = 0;
            if (lineFluidType === "Gas") velocityLimit = designCriteria.max_velocity_gas_mps;
            else if (lineFluidType === "Liquid") velocityLimit = designCriteria.max_velocity_liquid_mps;
            else velocityLimit = designCriteria.max_velocity_multiphase_mps;
            
            if (velocityLimit > 0) {
                requiredArea_by_Velocity = totalActualFlow / velocityLimit;
            }
        }
        
        if (lineFluidType !== "Liquid" && lineType !== "NNF") {
            const { Temperature_C, MW, Z_Factor, Light_Liquid_Density_kg_m3, Heavy_Liquid_Density_kg_m3 } = streamInfo;
            const pressure_pa_abs = (streamInfo.Pressure_kgf_cm2g + constants.P_STANDARD_KGF_CM2A) * constants.KGFCMA_TO_PA;
            const temperature_k = Temperature_C + constants.CELSIUS_TO_KELVIN;
            const gas_density_at_cond = calculateGasDensity(pressure_pa_abs, temperature_k, MW, Z_Factor);
            const { mixture_density } = calculateMixtureProperties(actualGasFlow, gas_density_at_cond, actualLLFlow, Light_Liquid_Density_kg_m3, actualHLFlow, Heavy_Liquid_Density_kg_m3);
            
            if (designCriteria.max_rhov2_kg_per_m_s2 > 0 && mixture_density > 0) {
                requiredArea_by_RhoV2 = Math.sqrt((mixture_density * Math.pow(totalActualFlow, 2)) / designCriteria.max_rhov2_kg_per_m_s2);
            }
        }

        requiredArea_m2 = Math.max(requiredArea_by_Velocity, requiredArea_by_RhoV2);
        
        if (requiredArea_m2 > 0) {
            const requiredDI_m = Math.sqrt(4 * requiredArea_m2 / Math.PI);
            const requiredDI_mm = requiredDI_m / constants.MM_TO_M;
            if (requiredDI_mm > maxRequiredDI_mm) {
                maxRequiredDI_mm = requiredDI_mm;
            }
        }
    }

    if (maxRequiredDI_mm === 0) {
        suggestionEl.textContent = 'No diameter required (zero flow).';
        return;
    }

    let bestFit = null;
    const sortedDiameters = Object.entries(diametersData).sort(([, a], [, b]) => a.DI_mm - b.DI_mm);

    for (const [id, pipe] of sortedDiameters) {
        if (pipe.DI_mm >= maxRequiredDI_mm) {
            bestFit = id;
            break; 
        }
    }

    if (bestFit) {
        suggestionEl.textContent = `Suggested diameter (by flow criteria): ${bestFit} (ID: ${diametersData[bestFit].DI_mm}mm)`;
    } else {
        suggestionEl.textContent = 'Flow rate is too large for available diameters.';
    }
}
