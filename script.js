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
    FT_PER_S_TO_M_PER_S: 0.3048
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
    "10-120": {"DN": "10", "DE_mm": 229.11, "e_mm": 21.97},
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
    // Criterios de Flujo
    "max_velocity_gas_mps": 20.0,
    "max_velocity_liquid_mps": 3.0,
    "max_velocity_multiphase_mps": 18.0,
    "max_rhov2_kg_per_m_s2": 3750.0,
    "max_mach_vent_lines": 0.7,
    "api14e_c_factor_nnf": 125.0,
    "api14e_c_factor_cf": 100.0,
    // Criterios de Espesor
    "allowable_stress_psi": 20000.0,
    "quality_factor_E": 1.0,
    "temp_coefficient_Y": 0.4,
    "corrosion_allowance_mm": 1.5
};

let currentProcessConditions = {
    "0_inlet_hot": {
        "Gas_Flow_Sm3_D": 180000.0, "Pressure_kgf_cm2g": 80.0, "Temperature_C": 45.0,
        "MW": 20.0, "Z_Factor": 0.95, "Gamma": 1.3,
        "Light_Liquid_Flow_m3_D": 2.0, "Light_Liquid_Density_kg_m3": 650.0,
        "Heavy_Liquid_Flow_m3_D": 2.0, "Heavy_Liquid_Density_kg_m3": 1000.0,
        "Fluid_Type": "Multifásico"
    },
    "1_disch_hot_gas": {
        "Gas_Flow_Sm3_D": 180000.0, "Pressure_kgf_cm2g": 100.0, "Temperature_C": 135.0,
        "MW": 20.0, "Z_Factor": 0.98, "Gamma": 1.25,
        "Light_Liquid_Flow_m3_D": 0.0, "Light_Liquid_Density_kg_m3": 0.0,
        "Heavy_Liquid_Flow_m3_D": 0.0, "Heavy_Liquid_Density_kg_m3": 0.0,
        "Fluid_Type": "Gas"
    },
    "2_pump_suction_liquid": {
        "Gas_Flow_Sm3_D": 0.0, "Pressure_kgf_cm2g": 5.0, "Temperature_C": 40.0,
        "MW": 0.0, "Z_Factor": 1.0, "Gamma": 1.3,
        "Light_Liquid_Flow_m3_D": 50.0, "Light_Liquid_Density_kg_m3": 750.0,
        "Heavy_Liquid_Flow_m3_D": 0.0, "Heavy_Liquid_Density_kg_m3": 0.0,
        "Fluid_Type": "Líquido"
    },
    "vent": {
        "Gas_Flow_Sm3_D": 180000.0, "Pressure_kgf_cm2g": 0.50, "Temperature_C": 50.0,
        "MW": 20.0, "Z_Factor": 0.9, "Gamma": 1.3,
        "Light_Liquid_Flow_m3_D": 0.0, "Light_Liquid_Density_kg_m3": 0.0,
        "Heavy_Liquid_Flow_m3_D": 0.0, "Heavy_Liquid_Density_kg_m3": 0.0,
        "Fluid_Type": "Gas"
    },
    "startup": {
        "Gas_Flow_Sm3_D": 215000.0, "Pressure_kgf_cm2g": 8.50, "Temperature_C": 50.0,
        "MW": 20.0, "Z_Factor": 0.9, "Gamma": 1.3,
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
    "Nombre del Proyecto": "Proyecto de Optimización de Red de Gas",
    "Número de Proyecto": "PRJ-2025-001",
    "Cliente": "Energía del Futuro S.A.",
    "Fecha": new Date().toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' }),
    "Preparado por": "Departamento de Ingeniería",
    "Revisado por": "Jefe de Ingeniería"
};

const originalProcessConditions = JSON.parse(JSON.stringify(currentProcessConditions));
const originalLinesData = JSON.parse(JSON.stringify(currentLinesData));


// --- Helper Functions ---

function calculateRequiredThickness(P_kgfcm2g, D_ext_mm, S_psi, E, Y, c_mm) {
    const P_pa = P_kgfcm2g * constants.KGFCMA_TO_PA;
    const S_pa = S_psi * constants.PSI_TO_PA;
    const t_pressure_mm = (P_pa * D_ext_mm) / (2 * (S_pa * E + P_pa * Y));
    const t_required_mm = t_pressure_mm + c_mm;
    return t_required_mm;
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

function calculateOverdesignPercentage(calculated_value, design_limit) {
    if (design_limit === 0 || !isFinite(design_limit)) return calculated_value > 0 ? -Infinity : 0;
    return ((design_limit - calculated_value) / design_limit) * 100;
}

function getLineFluidType(line) {
    if (!line || !line.Stream_Names || line.Stream_Names.length === 0) {
        return "Indefinido";
    }
    const streamTypes = line.Stream_Names.map(name => currentProcessConditions[name]?.Fluid_Type);
    if (streamTypes.some(type => type === 'Multifásico' || !type)) {
        return "Multifásico";
    }
    const hasGas = streamTypes.includes("Gas");
    const hasLiquid = streamTypes.includes("Líquido");
    if (hasGas && hasLiquid) return "Multifásico";
    if (hasGas) return "Gas";
    if (hasLiquid) return "Líquido";
    return "Indefinido";
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
            consoleOutput += `\nERROR: Diámetro ID '${Selected_Diameter_ID}' para línea '${lineTag}' no encontrado.\n`;
            continue;
        }
        if (Stream_Names.length === 0) {
            consoleOutput += `\nERROR: Línea '${lineTag}' no tiene corrientes asociadas.\n`;
            continue;
        }

        const { DE_mm, DI_mm, e_mm } = diameterInfo;
        const di_meters = DI_mm * constants.MM_TO_M;
        const flow_area_m2 = Math.PI * Math.pow((di_meters / 2), 2);
        const lineFluidType = getLineFluidType(lineInfo);

        consoleOutput += `\n=========================================================\n`;
        consoleOutput += `        MEMORIA DE CÁLCULO - LÍNEA: ${lineTag}\n`;
        consoleOutput += `=========================================================\n`;
        consoleOutput += `1. Datos de la Línea:\n`;
        consoleOutput += `    - Tipo de Servicio: ${Type}, Tipo de Fluido: ${lineFluidType}\n`;
        consoleOutput += `    - P. Diseño: ${Design_Pressure_kgf_cm2g.toFixed(2)} kgf/cm²g\n`;
        consoleOutput += `    - Diámetro: ${Selected_Diameter_ID} (DE: ${DE_mm.toFixed(2)}mm, DI: ${DI_mm.toFixed(2)}mm, e: ${e_mm.toFixed(2)}mm)\n`;
        consoleOutput += `    - Área de Flujo (A): ${flow_area_m2.toFixed(6)} m²\n`;

        // Mechanical Design Verification
        const required_thickness_mm = calculateRequiredThickness(Design_Pressure_kgf_cm2g, DE_mm, designCriteria.allowable_stress_psi, designCriteria.quality_factor_E, designCriteria.temp_coefficient_Y, designCriteria.corrosion_allowance_mm);
        const thickness_check_status = e_mm >= required_thickness_mm ? "OK" : "NO OK";
        
        let line_overall_status = thickness_check_status;
        let line_comments_aggregated = [];
        if (line_overall_status === "NO OK") {
            line_comments_aggregated.push(`Espesor de pared insuficiente.`);
        }
        
        consoleOutput += `\n2. Verificación de Diseño Mecánico:\n`;
        consoleOutput += `    - Espesor Mínimo Requerido (ASME B31.3):\n`;
        consoleOutput += `      t = (P*D) / (2*(S*E + P*Y)) + c\n`;
        consoleOutput += `      t = (${Design_Pressure_kgf_cm2g.toFixed(2)} * ${DE_mm}) / (2*(${designCriteria.allowable_stress_psi}*${designCriteria.quality_factor_E} + ${Design_Pressure_kgf_cm2g.toFixed(2)}*${designCriteria.temp_coefficient_Y})) + ${designCriteria.corrosion_allowance_mm} = ${required_thickness_mm.toFixed(3)} mm\n`;
        consoleOutput += `    - Comparación: t_requerido (${required_thickness_mm.toFixed(3)} mm) vs e_nominal (${e_mm.toFixed(3)} mm) -> **${thickness_check_status}**\n`;

        let pressure_check_status_overall = "OK";
        let pressure_comments = [];

        for (const streamName of Stream_Names) {
            const streamInfo = currentProcessConditions[streamName];
            if (!streamInfo) continue;

            const op_press = streamInfo.Pressure_kgf_cm2g;
            if (op_press > Design_Pressure_kgf_cm2g) {
                pressure_check_status_overall = "NO OK";
                pressure_comments.push(`P.Op (${op_press.toFixed(2)}) > P.Diseño (${Design_Pressure_kgf_cm2g.toFixed(2)}) para ${streamName}.`);
            }
        }
        
        consoleOutput += `    - Verificación de Presión: ${pressure_comments.length > 0 ? pressure_comments.join(' ') : `P.Operación <= P.Diseño para todas las corrientes.`} -> **${pressure_check_status_overall}**\n`;
        if(pressure_check_status_overall === "NO OK") {
            line_overall_status = "NO OK";
            line_comments_aggregated.push(...pressure_comments);
        }

        consoleOutput += `\n3. Verificación de Flujo (para cada escenario de operación):\n`;

        let line_stream_specific_results = [];
        let flow_check_status_overall = "OK";

        for (const streamName of Stream_Names) {
            const streamInfo = currentProcessConditions[streamName];
            if (!streamInfo) continue;

            consoleOutput += `\n  --- Escenario de Operación: Corriente '${streamName}' ---\n`;
            
            // Caudal Calculation for this specific stream
            const actualGasFlow = streamInfo.Actual_Gas_Flow_m3_s;
            const actualLLFlow = streamInfo.Actual_Light_Liquid_Flow_m3_s;
            const actualHLFlow = streamInfo.Actual_Heavy_Liquid_Flow_m3_s;
            const totalActualFlow = actualGasFlow + actualLLFlow + actualHLFlow;

            consoleOutput += `      - Cálculo de Caudal Actual (Q_actual):\n`;
            if (streamInfo.Gas_Flow_Sm3_D > 0) {
                 consoleOutput += `          Q_gas = ${actualGasFlow.toFixed(4)} m³/s\n`;
            }
            if (streamInfo.Light_Liquid_Flow_m3_D > 0) {
                 consoleOutput += `          Q_liq_liviano = ${actualLLFlow.toFixed(4)} m³/s\n`;
            }
             if (streamInfo.Heavy_Liquid_Flow_m3_D > 0) {
                 consoleOutput += `          Q_liq_pesado = ${actualHLFlow.toFixed(4)} m³/s\n`;
            }
            consoleOutput += `      - Caudal Volumétrico Total (Q_total) para este escenario: ${totalActualFlow.toFixed(4)} m³/s\n`;

            // Hydraulic verification for this specific stream
            const { Temperature_C, MW, Z_Factor, Gamma, Light_Liquid_Density_kg_m3, Heavy_Liquid_Density_kg_m3 } = streamInfo;
            const pressure_pa_abs = (streamInfo.Pressure_kgf_cm2g + constants.P_STANDARD_KGF_CM2A) * constants.KGFCMA_TO_PA;
            const temperature_k = Temperature_C + constants.CELSIUS_TO_KELVIN;
            const mw_kg_mol = MW / 1000;

            const gas_density_at_cond = calculateGasDensity(pressure_pa_abs, temperature_k, MW, Z_Factor);
            const { mixture_density } = calculateMixtureProperties(actualGasFlow, gas_density_at_cond, actualLLFlow, Light_Liquid_Density_kg_m3, actualHLFlow, Heavy_Liquid_Density_kg_m3);
            
            const velocity_mps = flow_area_m2 > 0 ? totalActualFlow / flow_area_m2 : 0;
            const rho_v2_calc = mixture_density * Math.pow(velocity_mps, 2);

            let stream_flow_status = "OK";
            let stream_comments = [];
            
            consoleOutput += `      - Verificación Hidráulica:\n`;
            consoleOutput += `          - Densidad Mezcla (ρ_m): ${mixture_density.toFixed(3)} kg/m³\n`;
            consoleOutput += `          - Velocidad (V = Q_total / A): ${totalActualFlow.toFixed(4)} / ${flow_area_m2.toFixed(6)} = ${velocity_mps.toFixed(2)} m/s\n`;
            consoleOutput += `          - RhoV² (ρ_m * V²): ${rho_v2_calc.toFixed(2)} kg/m·s²\n`;

            if (Type === "CF") {
                let max_velocity_limit;
                if (lineFluidType === "Gas") max_velocity_limit = designCriteria.max_velocity_gas_mps;
                else if (lineFluidType === "Líquido") max_velocity_limit = designCriteria.max_velocity_liquid_mps;
                else max_velocity_limit = designCriteria.max_velocity_multiphase_mps;
                
                consoleOutput += `          - Criterio Velocidad (V < V_max_${lineFluidType}): ${velocity_mps.toFixed(2)} < ${max_velocity_limit} m/s -> **${velocity_mps <= max_velocity_limit ? 'OK' : 'NO OK'}**\n`;
                if (velocity_mps > max_velocity_limit) {
                    stream_flow_status = "NO OK";
                    stream_comments.push(`Velocidad excede límite`);
                }
                
                if (lineFluidType !== "Líquido") {
                    consoleOutput += `          - Criterio RhoV² (ρV² < ρV²_max): ${rho_v2_calc.toFixed(2)} < ${designCriteria.max_rhov2_kg_per_m_s2} kg/m·s² -> **${rho_v2_calc <= designCriteria.max_rhov2_kg_per_m_s2 ? 'OK' : 'NO OK'}**\n`;
                    if (rho_v2_calc > designCriteria.max_rhov2_kg_per_m_s2) {
                        stream_flow_status = "NO OK";
                        stream_comments.push(`RhoV² excede límite`);
                    }
                }
            } else if (Type === "NNF") {
                const api14e_vel = calculateApi14eErosionalVelocity(designCriteria.api14e_c_factor_nnf, mixture_density);
                consoleOutput += `          - Criterio Erosional (V < V_api14e): ${velocity_mps.toFixed(2)} < ${api14e_vel.toFixed(2)} m/s -> **${velocity_mps <= api14e_vel ? 'OK' : 'NO OK'}**\n`;
                if (velocity_mps > api14e_vel) {
                    stream_flow_status = "NO OK";
                    stream_comments.push(`Velocidad erosional API 14E excedida`);
                }
            } else if (Type === "VL") {
                const speed_of_sound = calculateSpeedOfSound(Gamma, Z_Factor, temperature_k, mw_kg_mol);
                const mach_number = speed_of_sound > 0 ? velocity_mps / speed_of_sound : 0;
                consoleOutput += `          - Vel. Sonido: ${speed_of_sound.toFixed(2)} m/s, Mach: ${mach_number.toFixed(3)}\n`;
                consoleOutput += `          - Criterio Mach (Mach < Mach_max): ${mach_number.toFixed(3)} < ${designCriteria.max_mach_vent_lines} -> **${mach_number <= designCriteria.max_mach_vent_lines ? 'OK' : 'NO OK'}**\n`;
                if (mach_number > designCriteria.max_mach_vent_lines) {
                    stream_flow_status = "NO OK";
                    stream_comments.push(`Mach excede límite`);
                }
            }
            
            if (stream_flow_status === "NO OK") {
                flow_check_status_overall = "NO OK";
                line_overall_status = "NO OK";
                line_comments_aggregated.push(`Flujo NO OK para ${streamName}: ${stream_comments.join('. ')}`);
            }
            
            line_stream_specific_results.push({
                 "Stream Name": streamName, "Velocity (m/s)": velocity_mps,
                 "RhoV2 (kg/m.s²)": rho_v2_calc, "Flow Status": stream_flow_status
            });
        }

        consoleOutput += `\n4. Estado General de Verificación de la Línea: **${line_overall_status}**\n`;
        
        allLineCalculationResults.push({
            "Line TAG": lineTag, "Line Type": Type, "Line Fluid Type": lineFluidType,
            "Stream Names": Stream_Names.join(', '), "DN": diameterInfo.DN,
            "Selected Diameter ID": Selected_Diameter_ID, "DI (mm)": DI_mm, "DE (mm)": DE_mm,
            "Nominal Thickness (mm)": e_mm, "Design Pressure (kgf/cm²g)": Design_Pressure_kgf_cm2g,
            "Required Thickness (mm)": required_thickness_mm, "Thickness Check Status": thickness_check_status,
            "Pressure Check Status": pressure_check_status_overall,
            "Flow Check Status": flow_check_status_overall,
            "Overall Status": line_overall_status, "Comments": line_comments_aggregated.join("; "),
            "Stream Details": line_stream_specific_results
        });
    }

    document.getElementById('calculation-output').textContent = consoleOutput;
    renderEngineeringListTable(allLineCalculationResults);
    document.getElementById('download-csv-btn').disabled = false;
    document.getElementById('download-pdf-btn').disabled = false;
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
            <h4 class="title is-5">Criterios de Flujo</h4>
            <div class="columns is-multiline">
                <div class="column is-one-third"><div class="field"><label class="label">Vel. Máx. Gas (m/s)</label><div class="control"><input class="input" type="number" step="any" id="max_velocity_gas_mps" value="${designCriteria.max_velocity_gas_mps}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Vel. Máx. Líquido (m/s)</label><div class="control"><input class="input" type="number" step="any" id="max_velocity_liquid_mps" value="${designCriteria.max_velocity_liquid_mps}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Vel. Máx. Multifásico (m/s)</label><div class="control"><input class="input" type="number" step="any" id="max_velocity_multiphase_mps" value="${designCriteria.max_velocity_multiphase_mps}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">RhoV2 Máximo (kg/m·s²)</label><div class="control"><input class="input" type="number" step="any" id="max_rhov2_kg_per_m_s2" value="${designCriteria.max_rhov2_kg_per_m_s2}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Mach Máximo (VL)</label><div class="control"><input class="input" type="number" step="any" id="max_mach_vent_lines" value="${designCriteria.max_mach_vent_lines}"></div></div></div>
            </div>
            <h4 class="title is-5 mt-4">Criterios de Espesor (ASME B31.3)</h4>
            <div class="columns is-multiline">
                <div class="column is-one-third"><div class="field"><label class="label">Tensión Admisible (S) (psi)</label><div class="control"><input class="input" type="number" step="any" id="allowable_stress_psi" value="${designCriteria.allowable_stress_psi}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Factor Calidad (E)</label><div class="control"><input class="input" type="number" step="any" id="quality_factor_E" value="${designCriteria.quality_factor_E}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Coef. Temperatura (Y)</label><div class="control"><input class="input" type="number" step="any" id="temp_coefficient_Y" value="${designCriteria.temp_coefficient_Y}"></div></div></div>
                <div class="column is-one-third"><div class="field"><label class="label">Corrosión (c) (mm)</label><div class="control"><input class="input" type="number" step="any" id="corrosion_allowance_mm" value="${designCriteria.corrosion_allowance_mm}"></div></div></div>
            </div>
            <div class="field is-grouped"><div class="control"><button type="submit" class="button is-link">Guardar Criterios</button></div></div>
        </form>`;
    
    document.getElementById('design-criteria-form').addEventListener('submit', function(event) {
        event.preventDefault();
        designCriteria.max_velocity_gas_mps = parseFloat(document.getElementById('max_velocity_gas_mps').value);
        designCriteria.max_velocity_liquid_mps = parseFloat(document.getElementById('max_velocity_liquid_mps').value);
        designCriteria.max_velocity_multiphase_mps = parseFloat(document.getElementById('max_velocity_multiphase_mps').value);
        designCriteria.max_rhov2_kg_per_m_s2 = parseFloat(document.getElementById('max_rhov2_kg_per_m_s2').value);
        designCriteria.max_mach_vent_lines = parseFloat(document.getElementById('max_mach_vent_lines').value);
        designCriteria.allowable_stress_psi = parseFloat(document.getElementById('allowable_stress_psi').value);
        designCriteria.quality_factor_E = parseFloat(document.getElementById('quality_factor_E').value);
        designCriteria.temp_coefficient_Y = parseFloat(document.getElementById('temp_coefficient_Y').value);
        designCriteria.corrosion_allowance_mm = parseFloat(document.getElementById('corrosion_allowance_mm').value);
        alert("Criterios de diseño guardados.");
        displayDesignCriteria();
    });
}

function renderProcessConditionsTable() {
    const container = document.getElementById('process-conditions-display');
    let html = '<table class="table is-fullwidth is-striped is-hoverable"><thead><tr><th>Acciones</th><th>Corriente</th><th>Tipo Fluido</th><th>Caudal Actual (m³/s)</th><th>P. Op. (kgf/cm²g)</th><th>Temp (°C)</th></tr></thead><tbody>';
    for (const streamName in currentProcessConditions) {
        const stream = currentProcessConditions[streamName];
        const fluidTypeClass = stream.Fluid_Type === 'Gas' ? 'fluid-gas' : stream.Fluid_Type === 'Líquido' ? 'fluid-liquid' : stream.Fluid_Type === 'Multifásico' ? 'fluid-multiphase' : 'fluid-undefined';
        
        // Pre-calculate actual flows for display
        const actualGasFlow = calculateActualFlowRateGas(stream.Gas_Flow_Sm3_D, stream.Pressure_kgf_cm2g, stream.Temperature_C, stream.Z_Factor);
        const actualLLFlow = calculateActualFlowRateLiquid(stream.Light_Liquid_Flow_m3_D);
        const actualHLFlow = calculateActualFlowRateLiquid(stream.Heavy_Liquid_Flow_m3_D);
        const totalActualFlow = actualGasFlow + actualLLFlow + actualHLFlow;

        html += `<tr data-stream-name="${streamName}">
            <td><button class="button is-small is-info is-outlined edit-pc-btn" data-stream-name="${streamName}">Editar</button> <button class="button is-small is-danger is-outlined delete-pc-btn" data-stream-name="${streamName}">Eliminar</button></td>
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
    document.querySelectorAll('.delete-pc-btn').forEach(b => b.addEventListener('click', deleteProcessCondition));
    populateStreamDropdown();
}

function loadProcessConditionForEdit(event) {
    const streamName = event.target.dataset.streamName;
    const stream = currentProcessConditions[streamName];
    const form = document.getElementById('process-condition-form');

    document.getElementById('pc-stream-name').value = streamName;
    document.getElementById('pc-gas-flow').value = stream.Gas_Flow_Sm3_D;
    document.getElementById('pc-pressure').value = stream.Pressure_kgf_cm2g;
    document.getElementById('pc-temperature').value = stream.Temperature_C;
    document.getElementById('pc-mw').value = stream.MW;
    document.getElementById('pc-z-factor').value = stream.Z_Factor;
    document.getElementById('pc-gamma').value = stream.Gamma;
    document.getElementById('pc-light-liq-flow').value = stream.Light_Liquid_Flow_m3_D;
    document.getElementById('pc-light-liq-density').value = stream.Light_Liquid_Density_kg_m3;
    document.getElementById('pc-heavy-liq-flow').value = stream.Heavy_Liquid_Flow_m3_D;
    document.getElementById('pc-heavy-liq-density').value = stream.Heavy_Liquid_Density_kg_m3;
    
    // Store original name on the form's dataset to handle renames
    form.dataset.originalName = streamName;
}

function deleteProcessCondition(event) {
    const streamName = event.target.dataset.streamName;
    if (confirm(`¿Eliminar la corriente '${streamName}'? También se eliminará de cualquier línea asociada.`)) {
        delete currentProcessConditions[streamName];
        // Remove the deleted stream from any line that uses it
        for (const lineTag in currentLinesData) {
            currentLinesData[lineTag].Stream_Names = currentLinesData[lineTag].Stream_Names.filter(name => name !== streamName);
            // Optional: delete line if it has no more streams
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
    let html = '<table class="table is-fullwidth is-striped is-hoverable"><thead><tr><th>Acciones</th><th>TAG</th><th>Tipo Fluido</th><th>DI (m)</th><th>Área (m²)</th><th>P. Diseño</th><th>Corriente(s)</th></tr></thead><tbody>';
    for (const lineTag in currentLinesData) {
        const line = currentLinesData[lineTag];
        const lineFluidType = getLineFluidType(line);
        const fluidTypeClass = lineFluidType === 'Gas' ? 'fluid-gas' : lineFluidType === 'Líquido' ? 'fluid-liquid' : lineFluidType === 'Multifásico' ? 'fluid-multiphase' : 'fluid-undefined';
        const diameterInfo = diametersData[line.Selected_Diameter_ID];
        const di_meters = diameterInfo ? diameterInfo.DI_mm * constants.MM_TO_M : 0;
        const flow_area_m2 = diameterInfo ? Math.PI * Math.pow((di_meters / 2), 2) : 0;

        html += `<tr data-line-tag="${lineTag}">
            <td><button class="button is-small is-info is-outlined edit-line-btn" data-line-tag="${lineTag}">Editar</button> <button class="button is-small is-danger is-outlined delete-line-btn" data-line-tag="${lineTag}">Eliminar</button></td>
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
    document.querySelectorAll('.delete-line-btn').forEach(b => b.addEventListener('click', deleteLine));
}

function loadLineForEdit(event) {
    const lineTag = event.target.dataset.lineTag;
    const line = currentLinesData[lineTag];
    const form = document.getElementById('line-form');

    document.getElementById('line-tag').value = lineTag;
    document.getElementById('line-design-pressure').value = line.Design_Pressure_kgf_cm2g || 0;
    document.getElementById('line-type').value = line.Type;
    const streamSelect = document.getElementById('line-stream-name');
    Array.from(streamSelect.options).forEach(opt => opt.selected = line.Stream_Names.includes(opt.value));
    document.getElementById('line-diameter-id').value = line.Selected_Diameter_ID;
    
    // Store original tag on the form's dataset to handle renames
    form.dataset.originalTag = lineTag;
}

function deleteLine(event) {
    const lineTag = event.target.dataset.lineTag;
    if (confirm(`¿Eliminar la línea '${lineTag}'?`)) {
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
        select.innerHTML = '<option value="" disabled>No hay corrientes disponibles</option>';
    }
}

function populateDiameterDropdown() {
    const select = document.getElementById('line-diameter-id');
    select.innerHTML = '<option value="">Seleccione Diámetro</option>';
    for (const diameterId in diametersData) {
        const option = document.createElement('option');
        option.value = diameterId;
        option.textContent = `${diameterId} (DI: ${diametersData[diameterId].DI_mm}mm, e: ${diametersData[diameterId].e_mm}mm)`;
        select.appendChild(option);
    }
}

function renderEngineeringListTable(results) {
    const container = document.getElementById('engineering-list-table');
    if (results.length === 0) {
        container.innerHTML = '<p class="has-text-grey">No hay resultados para mostrar.</p>';
        return;
    }
    const headers = ["Ver", "Línea", "Tipo Fluido", "Diámetro", "Verif. Espesor", "Verif. Presión", "Verif. Flujo", "Estado General", "Comentarios"];
    let html = `<table class="table is-fullwidth is-bordered is-striped is-narrow is-hoverable"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;

    results.forEach((row, index) => {
        const thicknessStatusClass = row["Thickness Check Status"] === 'OK' ? 'status-ok' : 'status-no-ok';
        const pressureStatusClass = row["Pressure Check Status"] === 'OK' ? 'status-ok' : 'status-no-ok';
        const flowStatusClass = row["Flow Check Status"] === 'OK' ? 'status-ok' : 'status-no-ok';
        const overallStatusClass = row["Overall Status"] === 'OK' ? 'status-ok' : 'status-no-ok';

        html += `
            <tr>
                <td><button class="button is-small is-info is-outlined toggle-details-btn" data-target="details-${index}"><span class="icon is-small"><i class="fas fa-eye"></i></span></button></td>
                <td><strong>${row["Line TAG"]}</strong></td>
                <td>${row["Line Fluid Type"]}</td>
                <td>${row["Selected Diameter ID"]}</td>
                <td class="${thicknessStatusClass}">${row["Thickness Check Status"]}</td>
                <td class="${pressureStatusClass}">${row["Pressure Check Status"]}</td>
                <td class="${flowStatusClass}">${row["Flow Check Status"]}</td>
                <td class="${overallStatusClass}">${row["Overall Status"]}</td>
                <td>${row["Comments"]}</td>
            </tr>
            <tr id="details-${index}" class="line-details-row is-hidden"><td colspan="${headers.length}"><div class="box">`;
        
        html += `<h4 class="title is-6">Detalle de Verificación de Flujo por Corriente</h4>
                 <table class="table is-fullwidth is-bordered"><thead><tr><th>Corriente</th><th>Velocidad (m/s)</th><th>RhoV² (kg/m.s²)</th><th>Estado Flujo</th></tr></thead><tbody>`;
        row["Stream Details"].forEach(sd => {
            html += `<tr><td>${sd["Stream Name"]}</td><td>${sd["Velocity (m/s)"].toFixed(2)}</td><td>${sd["RhoV2 (kg/m.s²)"].toFixed(2)}</td><td class="${sd["Flow Status"] === 'OK' ? 'status-ok' : 'status-no-ok'}">${sd["Flow Status"]}</td></tr>`;
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

function downloadCSV() {
    if (allLineCalculationResults.length === 0) { alert("No hay datos para exportar."); return; }
    const headers = [
        "Line TAG", "Line Type", "Line Fluid Type", "Selected Diameter ID", "DI (mm)", "DE (mm)", "Nominal Thickness (mm)",
        "Design Pressure (kgf/cm²g)", "Required Thickness (mm)", "Thickness Check Status", "Pressure Check Status", "Flow Check Status", "Overall Status", "Comments"
    ];
    let csv = headers.join(',') + '\n';
    allLineCalculationResults.forEach(row => {
        const values = headers.map(header => {
            let value = row[header];
            if (typeof value === 'number') value = value.toFixed(4);
            return `"${String(value).replace(/"/g, '""')}"`;
        });
        csv += values.join(',') + '\n';
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `${projectInfo["Número de Proyecto"]}_listado_ingenieria.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPDF() {
    if (allLineCalculationResults.length === 0) {
        alert("No hay datos para exportar.");
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
        doc.text("MEMORIA DE CÁLCULO DE LÍNEAS", pageWidth / 2, 40, { align: 'center' });
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(`Página ${pageNumber}`, pageWidth - margin, pageHeight - 20, { align: 'right' });
        doc.text(projectInfo["Fecha"], margin, pageHeight - 20);
    };

    const checkNewPage = (requiredHeight) => {
        if (finalY + requiredHeight > pageHeight - 60) {
            doc.addPage();
            pageNumber++;
            addHeaderFooter();
            finalY = 80;
        }
    };
    
    // --- Title Page ---
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text("Memoria de Cálculo de Líneas", pageWidth / 2, pageHeight / 2 - 60, { align: 'center' });
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(`Proyecto: ${projectInfo["Nombre del Proyecto"]}`, pageWidth / 2, pageHeight / 2 - 30, { align: 'center' });
    doc.text(`Número: ${projectInfo["Número de Proyecto"]}`, pageWidth / 2, pageHeight / 2 - 10, { align: 'center' });
    doc.text(`Cliente: ${projectInfo["Cliente"]}`, pageWidth / 2, pageHeight / 2 + 10, { align: 'center' });
    addHeaderFooter();

    // --- Criteria Page ---
    doc.addPage();
    pageNumber++;
    addHeaderFooter();
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text("1. Criterios de Diseño Aplicados", margin, 80);

    const criteriaBody = [
        [{ content: 'Criterios de Flujo', colSpan: 2, styles: { halign: 'center', fillColor: [220, 220, 220] } }],
        ["Velocidad Máxima Gas (CF)", `${designCriteria.max_velocity_gas_mps} m/s`],
        ["Velocidad Máxima Líquido (CF)", `${designCriteria.max_velocity_liquid_mps} m/s`],
        ["Velocidad Máxima Multifásico (CF)", `${designCriteria.max_velocity_multiphase_mps} m/s`],
        ["RhoV² Máximo", `${designCriteria.max_rhov2_kg_per_m_s2} kg/(m·s²)`],
        ["Mach Máximo (VL)", `${designCriteria.max_mach_vent_lines}`],
        [{ content: 'Criterios de Espesor (ASME B31.3)', colSpan: 2, styles: { halign: 'center', fillColor: [220, 220, 220] } }],
        ["Tensión Admisible (S)", `${designCriteria.allowable_stress_psi} psi`],
        ["Factor de Calidad de Junta (E)", `${designCriteria.quality_factor_E}`],
        ["Coeficiente de Temperatura (Y)", `${designCriteria.temp_coefficient_Y}`],
        ["Sobreespesor por Corrosión (c)", `${designCriteria.corrosion_allowance_mm} mm`]
    ];
    doc.autoTable({
        startY: 100,
        body: criteriaBody,
        theme: 'grid',
        styles: { fontSize: 9 },
        headStyles: { fontStyle: 'bold', fontSize: 10 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 200 } }
    });
    finalY = doc.autoTable.previous.finalY;

    // --- Detailed Calculation per Line ---
    doc.addPage();
    pageNumber++;
    addHeaderFooter();
    finalY = 80;

    allLineCalculationResults.forEach((line, index) => {
        checkNewPage(250); // Estimate height for a full line section
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(`2.${index + 1} Verificación de Línea: ${line['Line TAG']}`, margin, finalY);
        finalY += 20;

        // Line Data Table
        const lineDataBody = [
            ['Tipo de Servicio', line['Line Type']], ['Tipo de Fluido', line['Line Fluid Type']],
            ['Diámetro', line['Selected Diameter ID']], ['Área (A)', `${(Math.PI * Math.pow(line['DI (mm)'] * constants.MM_TO_M / 2, 2)).toFixed(6)} m²`],
            ['P. Diseño (P)', `${line['Design Pressure (kgf/cm²g)']} kgf/cm²g`], ['DE', `${line['DE (mm)']} mm`]
        ];
        doc.autoTable({ startY: finalY, body: lineDataBody, theme: 'grid', styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { fontStyle: 'bold' }, 2: { fontStyle: 'bold' } } });
        finalY = doc.autoTable.previous.finalY + 15;
        
        checkNewPage(150);
        // Mechanical Verification
        const mechBody = [
            [{ content: 'Verificación de Diseño Mecánico', colSpan: 2, styles: { halign: 'center', fillColor: [230, 230, 230] } }],
            [{ content: 'Espesor (ASME B31.3)', colSpan: 2, styles: { fontStyle: 'bold' } }],
            ['Fórmula', 't = (P*D) / (2*(S*E + P*Y)) + c'],
            ['Cálculo', `t = (${line['Design Pressure (kgf/cm²g)'].toFixed(2)}*${line['DE (mm)']})/(2*(${designCriteria.allowable_stress_psi}*${designCriteria.quality_factor_E}+${line['Design Pressure (kgf/cm²g)'].toFixed(2)}*${designCriteria.temp_coefficient_Y}))+${designCriteria.corrosion_allowance_mm} = ${line['Required Thickness (mm)'].toFixed(3)} mm`],
            ['Comparación', `t_req (${line['Required Thickness (mm)'].toFixed(3)} mm) <= e_nom (${line['Nominal Thickness (mm)'].toFixed(2)} mm)`],
            ['Resultado Espesor', { content: line['Thickness Check Status'], styles: { textColor: line['Thickness Check Status'] === 'OK' ? [0, 128, 0] : [255, 0, 0] } }],
            [{ content: 'Presión', colSpan: 2, styles: { fontStyle: 'bold' } }],
        ];
        line['Stream Details'].forEach(sd => {
            const stream = currentProcessConditions[sd['Stream Name']];
            mechBody.push([`P. Op. (${sd['Stream Name']})`, `${stream.Pressure_kgf_cm2g.toFixed(2)} <= ${line['Design Pressure (kgf/cm²g)'].toFixed(2)} kgf/cm²g`]);
        });
        mechBody.push(['Resultado Presión', { content: line['Pressure Check Status'], styles: { textColor: line['Pressure Check Status'] === 'OK' ? [0, 128, 0] : [255, 0, 0] } }]);
        doc.autoTable({ startY: finalY, body: mechBody, theme: 'grid', styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { fontStyle: 'bold', cellWidth: 120 } } });
        finalY = doc.autoTable.previous.finalY + 15;

        // Flow Verification per Stream
        line['Stream Details'].forEach(sd => {
            checkNewPage(180);
            const stream = currentProcessConditions[sd['Stream Name']];
            const totalActualFlow = stream.Actual_Gas_Flow_m3_s + stream.Actual_Light_Liquid_Flow_m3_s + stream.Actual_Heavy_Liquid_Flow_m3_s;
            const flowBody = [
                [{ content: `Verificación Hidráulica - Escenario: ${sd['Stream Name']}`, colSpan: 2, styles: { halign: 'center', fillColor: [230, 230, 230] } }],
                ['Caudal Actual Gas', `${stream.Actual_Gas_Flow_m3_s.toFixed(4)} m³/s`],
                ['Caudal Actual Líquido', `${(stream.Actual_Light_Liquid_Flow_m3_s + stream.Actual_Heavy_Liquid_Flow_m3_s).toFixed(4)} m³/s`],
                ['Caudal Total Actual (Q)', `${totalActualFlow.toFixed(4)} m³/s`],
                ['Velocidad (V = Q/A)', `${sd['Velocity (m/s)'].toFixed(2)} m/s`],
                ['RhoV²', `${sd['RhoV2 (kg/m.s²)'].toFixed(2)} kg/m·s²`],
                ['Resultado Flujo', { content: sd['Flow Status'], styles: { textColor: sd['Flow Status'] === 'OK' ? [0, 128, 0] : [255, 0, 0] } }]
            ];
            doc.autoTable({ startY: finalY, body: flowBody, theme: 'grid', styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { fontStyle: 'bold' } } });
            finalY = doc.autoTable.previous.finalY + 10;
        });

        // Overall Result
        checkNewPage(40);
        doc.autoTable({
            startY: finalY,
            body: [[{content: 'Estado General de la Línea', styles: {fontStyle: 'bold'}}, {content: line['Overall Status'], styles: {textColor: line['Overall Status'] === 'OK' ? [0, 128, 0] : [255, 0, 0]}}]],
            theme: 'grid',
            styles: { fontSize: 10, cellPadding: 4 }
        });
        finalY = doc.autoTable.previous.finalY + 25;
    });

    doc.save(`${projectInfo["Número de Proyecto"]}_memoria_calculo_detallada.pdf`);
}


// --- Project Save/Load Functions ---

function saveProjectData() {
    const projectData = { projectInfo, processConditions: currentProcessConditions, linesData: currentLinesData, designCriteria };
    const dataStr = JSON.stringify(projectData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${projectInfo["Número de Proyecto"] || 'proyecto'}_data.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    alert("Proyecto guardado exitosamente.");
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
            
            // Ensure backward compatibility for loaded line data
            for (const lineTag in currentLinesData) {
                if (!currentLinesData[lineTag].hasOwnProperty('Design_Pressure_kgf_cm2g')) {
                    currentLinesData[lineTag].Design_Pressure_kgf_cm2g = 0; // Add with a default value
                }
            }

            document.getElementById('project-name').value = projectInfo["Nombre del Proyecto"];
            document.getElementById('project-number').value = projectInfo["Número de Proyecto"];
            document.getElementById('client').value = projectInfo["Cliente"];
            document.getElementById('prepared-by').value = projectInfo["Preparado por"];
            document.getElementById('reviewed-by').value = projectInfo["Revisado por"];
            
            displayProjectInfo();
            displayDesignCriteria();
            renderProcessConditionsTable();
            renderLinesTable();
            
            document.getElementById('results-section').style.display = 'none';
            document.getElementById('download-csv-btn').disabled = true;
            document.getElementById('download-pdf-btn').disabled = true;
            alert("Proyecto cargado exitosamente.");
        } catch (error) {
            alert(`Error al cargar el archivo JSON: ${error.message}.`);
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

    document.getElementById('project-name').value = projectInfo["Nombre del Proyecto"];
    document.getElementById('project-number').value = projectInfo["Número de Proyecto"];
    document.getElementById('client').value = projectInfo["Cliente"];
    document.getElementById('prepared-by').value = projectInfo["Preparado por"];
    document.getElementById('reviewed-by').value = projectInfo["Revisado por"];

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
        projectInfo["Nombre del Proyecto"] = document.getElementById('project-name').value.trim();
        projectInfo["Número de Proyecto"] = document.getElementById('project-number').value.trim();
        projectInfo["Cliente"] = document.getElementById('client').value.trim();
        projectInfo["Preparado por"] = document.getElementById('prepared-by').value.trim();
        projectInfo["Revisado por"] = document.getElementById('reviewed-by').value.trim();
        projectInfo["Fecha"] = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' });
        displayProjectInfo();
        alert("Información del proyecto guardada.");
    });

    document.getElementById('process-condition-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const form = this;
        const newStreamName = document.getElementById('pc-stream-name').value.trim();
        const originalStreamName = form.dataset.originalName;

        if (!newStreamName) {
            alert("El nombre de la corriente es obligatorio.");
            return;
        }

        const gasFlow = parseFloat(document.getElementById('pc-gas-flow').value) || 0;
        const lightLiqFlow = parseFloat(document.getElementById('pc-light-liq-flow').value) || 0;
        const heavyLiqFlow = parseFloat(document.getElementById('pc-heavy-liq-flow').value) || 0;
        const totalLiqFlow = lightLiqFlow + heavyLiqFlow;

        let fluidType = "Gas";
        if (gasFlow > 0 && totalLiqFlow > 0) fluidType = "Multifásico";
        else if (gasFlow === 0 && totalLiqFlow > 0) fluidType = "Líquido";

        const streamData = {
            Gas_Flow_Sm3_D: gasFlow,
            Pressure_kgf_cm2g: parseFloat(document.getElementById('pc-pressure').value) || 0,
            Temperature_C: parseFloat(document.getElementById('pc-temperature').value) || 0,
            MW: parseFloat(document.getElementById('pc-mw').value) || 0,
            Z_Factor: parseFloat(document.getElementById('pc-z-factor').value) || 1,
            Gamma: parseFloat(document.getElementById('pc-gamma').value) || 1.3,
            Light_Liquid_Flow_m3_D: lightLiqFlow,
            Light_Liquid_Density_kg_m3: parseFloat(document.getElementById('pc-light-liq-density').value) || 0,
            Heavy_Liquid_Flow_m3_D: heavyLiqFlow,
            Heavy_Liquid_Density_kg_m3: parseFloat(document.getElementById('pc-heavy-liq-density').value) || 0,
            Fluid_Type: fluidType
        };

        // Handle rename logic
        if (originalStreamName && originalStreamName !== newStreamName) {
            if (currentProcessConditions[newStreamName]) {
                alert(`Error: La corriente '${newStreamName}' ya existe. Por favor, elija otro nombre.`);
                return;
            }
            currentProcessConditions[newStreamName] = streamData;
            delete currentProcessConditions[originalStreamName];

            // Update references in lines
            for (const lineTag in currentLinesData) {
                const line = currentLinesData[lineTag];
                const streamIndex = line.Stream_Names.indexOf(originalStreamName);
                if (streamIndex > -1) {
                    line.Stream_Names[streamIndex] = newStreamName;
                }
            }
        } else {
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
            alert("El TAG de línea es obligatorio.");
            return;
        }

        const selectedStreamNames = Array.from(document.getElementById('line-stream-name').selectedOptions).map(opt => opt.value);
        if (selectedStreamNames.length === 0) {
            alert("Debe seleccionar al menos una corriente.");
            return;
        }

        const lineData = {
            "Selected_Diameter_ID": document.getElementById('line-diameter-id').value,
            "Stream_Names": selectedStreamNames,
            "Type": document.getElementById('line-type').value,
            "Design_Pressure_kgf_cm2g": parseFloat(document.getElementById('line-design-pressure').value) || 0,
        };

        // Handle rename logic
        if (originalLineTag && originalLineTag !== newLineTag) {
            if (currentLinesData[newLineTag]) {
                alert(`Error: La línea con TAG '${newLineTag}' ya existe. Por favor, elija otro TAG.`);
                return;
            }
            currentLinesData[newLineTag] = lineData;
            delete currentLinesData[originalLineTag];
        } else {
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
    });

    document.getElementById('calculate-btn').addEventListener('click', performCalculations);
    document.getElementById('save-project-btn').addEventListener('click', saveProjectData);
    document.getElementById('load-project-btn').addEventListener('click', () => document.getElementById('load-project-file-input').click());
    document.getElementById('load-project-file-input').addEventListener('change', loadProjectData);
    document.getElementById('download-csv-btn').addEventListener('click', downloadCSV);
    document.getElementById('download-pdf-btn').addEventListener('click', downloadPDF);
    document.getElementById('reset-data-btn').addEventListener('click', () => {
        if (confirm("¿Reiniciar todos los datos a sus valores iniciales?")) {
            currentProcessConditions = JSON.parse(JSON.stringify(originalProcessConditions));
            currentLinesData = JSON.parse(JSON.stringify(originalLinesData));
            renderProcessConditionsTable();
            renderLinesTable();
            document.getElementById('results-section').style.display = 'none';
        }
    });
});
