// Paste your custom array database here
const productDatabase = [
  { "id": "rev-gt2-55", "sku": "REV-41-1797", "name": "GT2 3mm Pitch Belt - 55 Tooth", "category": "belt", "type": "gt2", "pitchMm": 3, "teeth": 55, "lengthMm": 165 },
  { "id": "rev-gt2-85", "sku": "REV-41-1798", "name": "GT2 3mm Pitch Belt - 85 Tooth", "category": "belt", "type": "gt2", "pitchMm": 3, "teeth": 85, "lengthMm": 255 },
  { "id": "rev-gt2-105", "sku": "REV-41-1799", "name": "GT2 3mm Pitch Belt - 105 Tooth", "category": "belt", "type": "gt2", "pitchMm": 3, "teeth": 105, "lengthMm": 315 },
  { "id": "rev-gt2-120", "sku": "REV-41-1800", "name": "GT2 3mm Pitch Belt - 120 Tooth", "category": "belt", "type": "gt2", "pitchMm": 3, "teeth": 120, "lengthMm": 360 },
  { "id": "rev-gt2-145", "sku": "REV-41-1801", "name": "GT2 3mm Pitch Belt - 145 Tooth", "category": "belt", "type": "gt2", "pitchMm": 3, "teeth": 145, "lengthMm": 435 },
  { "id": "rev-gt2-184", "sku": "REV-41-1804", "name": "GT2 3mm Pitch Belt - 184 Tooth", "category": "belt", "type": "gt2", "pitchMm": 3, "teeth": 184, "lengthMm": 552 },
  { "id": "rev-gt2-210", "sku": "REV-41-1802", "name": "GT2 3mm Pitch Belt - 210 Tooth", "category": "belt", "type": "gt2", "pitchMm": 3, "teeth": 210, "lengthMm": 630 },
  { "id": "rev-gt2-270", "sku": "REV-41-1803", "name": "GT2 3mm Pitch Belt - 270 Tooth", "category": "belt", "type": "gt2", "pitchMm": 3, "teeth": 270, "lengthMm": 810 },
  { "id": "rev-rt25-32", "sku": "REV-21-4032", "name": "32T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 32, "lengthMm": 203.2 },
  { "id": "rev-rt25-36", "sku": "REV-21-4036", "name": "36T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 36, "lengthMm": 228.6 },
  { "id": "rev-rt25-40", "sku": "REV-21-4040", "name": "40T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 40, "lengthMm": 254.0 },
  { "id": "rev-rt25-48", "sku": "REV-21-4048", "name": "48T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 48, "lengthMm": 304.8 },
  { "id": "rev-rt25-56", "sku": "REV-21-4056", "name": "56T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 56, "lengthMm": 355.6 },
  { "id": "rev-rt25-64", "sku": "REV-21-4064", "name": "64T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 64, "lengthMm": 406.4 },
  { "id": "rev-rt25-72", "sku": "REV-21-4072", "name": "72T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 72, "lengthMm": 457.2 },
  { "id": "rev-rt25-80", "sku": "REV-21-4080", "name": "80T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 80, "lengthMm": 508.0 },
  { "id": "rev-rt25-88", "sku": "REV-21-4088", "name": "88T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 88, "lengthMm": 558.8 },
  { "id": "rev-rt25-96", "sku": "REV-21-4096", "name": "96T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 96, "lengthMm": 609.6 },
  { "id": "rev-rt25-104", "sku": "REV-21-4104", "name": "104T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 104, "lengthMm": 660.4 },
  { "id": "rev-rt25-112", "sku": "REV-21-4112", "name": "112T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 112, "lengthMm": 711.2 },
  { "id": "rev-rt25-120", "sku": "REV-21-4120", "name": "120T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 120, "lengthMm": 762.0 },
  { "id": "rev-rt25-128", "sku": "REV-21-4128", "name": "128T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 128, "lengthMm": 812.8 },
  { "id": "rev-rt25-136", "sku": "REV-21-4136", "name": "136T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 136, "lengthMm": 863.6 },
  { "id": "rev-rt25-144", "sku": "REV-21-4144", "name": "144T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 144, "lengthMm": 914.4 },
  { "id": "rev-rt25-152", "sku": "REV-21-4152", "name": "152T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 152, "lengthMm": 965.2 },
  { "id": "rev-rt25-160", "sku": "REV-21-4160", "name": "160T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 160, "lengthMm": 1016.0 },
  { "id": "rev-rt25-168", "sku": "REV-21-4168", "name": "168T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 168, "lengthMm": 1066.8 },
  { "id": "rev-rt25-176", "sku": "REV-21-4176", "name": "176T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 176, "lengthMm": 1117.6 },
  { "id": "rev-rt25-184", "sku": "REV-21-4184", "name": "184T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 184, "lengthMm": 1168.4 },
  { "id": "rev-rt25-192", "sku": "REV-21-4192", "name": "192T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 192, "lengthMm": 1219.2 },
  { "id": "rev-rt25-200", "sku": "REV-21-4200", "name": "200T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 200, "lengthMm": 1270.0 },
  { "id": "rev-rt25-208", "sku": "REV-21-4208", "name": "208T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 208, "lengthMm": 1320.8 },
  { "id": "rev-rt25-216", "sku": "REV-21-4216", "name": "216T RT25 Belt", "category": "belt", "type": "rt25", "pitchMm": 6.35, "teeth": 216, "lengthMm": 1371.6 },
  { "id": "rev-chain-25", "sku": "REV-41-1365", "name": "#25 Roller Chain", "category": "chain", "type": "25", "pitchMm": 6.35 },
  { "id": "rev-chain-35", "sku": "REV-21-3745", "name": "#35 Heavy Chain", "category": "chain", "type": "35", "pitchMm": 9.525 }
];

function recommendSize() {
    const componentId = document.getElementById('type-select').value;
    const selectedItem = productDatabase.find(item => item.id === componentId);
    
    const N1 = parseInt(document.getElementById('teeth1').value);
    const N2 = parseInt(document.getElementById('teeth2').value);
    const targetC = parseFloat(document.getElementById('desired-center').value);

    if (!selectedItem || isNaN(N1) || isNaN(N2) || isNaN(targetC)) return;

    const pitch = selectedItem.pitchMm;

    // --- STRATEGY 1: DYNAMIC CHAIN LINK GENERATION ---
    if (selectedItem.category === "chain" || selectedItem.category === "chain_component") {
        const exactLinksFloat = (2 * targetC / pitch) + ((N1 + N2) / 2) + (Math.pow(N2 - N1, 2) / (4 * Math.PI * Math.PI * targetC / pitch));
        
        let recommendedLinks = Math.round(exactLinksFloat);
        if (recommendedLinks % 2 !== 0) {
            recommendedLinks += 1; 
        }

        const perfectChainCenter = calculateTrueCenter(N1, N2, recommendedLinks, pitch);
        const recommendedChassisCenter = perfectChainCenter - 0.25;

        displayOutput({
            mode: "chain",
            name: `${selectedItem.name || 'Custom Chain'} (Cut to length)`,
            detail: `${recommendedLinks} Links total`,
            sku: selectedItem.sku || "N/A",
            theoreticalCenter: perfectChainCenter,
            chassisCenter: recommendedChassisCenter,
            error: perfectChainCenter - targetC
        });
    } 
    // --- STRATEGY 2: INVENTORY BELT SELECTION ---
    else if (selectedItem.category === "belt") {
        const matchedBelts = productDatabase.filter(item => item.type === selectedItem.type);
        
        let bestBelt = null;
        let closestCenterDist = Infinity;
        let minimalError = Infinity;

        matchedBelts.forEach(belt => {
            const trueC = calculateTrueCenter(N1, N2, belt.teeth, pitch);
            if (trueC > 0) {
                const error = trueC - targetC;
                if (Math.abs(error) < minimalError) {
                    minimalError = Math.abs(error);
                    closestCenterDist = trueC;
                    bestBelt = belt;
                }
            }
        });

        if (bestBelt) {
            displayOutput({
                mode: "belt",
                name: bestBelt.name,
                detail: `${bestBelt.teeth} Teeth`,
                sku: bestBelt.sku || "N/A",
                theoreticalCenter: closestCenterDist,
                chassisCenter: closestCenterDist, 
                error: closestCenterDist - targetC
            });
        }
    }
}

// Full mechanical center line resolution
// Исправленная и точная математическая функция расчета расстояния
function calculateTrueCenter(N1, N2, totalTeeth, pitch) {
    // Если звёздочки/шкивы одинаковые, формула упрощается и не ломает код
    if (N1 === N2) {
        return ((totalTeeth - N1) * pitch) / 2;
    }
    
    // Если звёздочки разные, включается полное геометрическое уравнение wrap math
    const b = 2 * totalTeeth - Math.PI * (N1 + N2);
    const c = Math.pow(N2 - N1, 2) / (Math.PI * Math.PI);
    const discriminant = b * b - 32 * c;
    
    if (discriminant < 0) return 0; // Защита от нереалистичных параметров сборки
    
    return ((b + Math.sqrt(discriminant)) / 8) * pitch;
}


function displayOutput(res) {
    document.getElementById('results-panel').style.display = "block";
    document.getElementById('rec-name').innerText = res.name;
    document.getElementById('rec-sku').innerText = res.sku;
    document.getElementById('rec-detail').innerText = res.detail;
    document.getElementById('rec-center').innerText = `${res.theoreticalCenter.toFixed(3)} mm`;
    
    const centerContainer = document.getElementById('chassis-center-container');
    if (res.mode === "chain") {
        centerContainer.style.display = "block";
        document.getElementById('rec-chassis-center').innerText = `${res.chassisCenter.toFixed(3)} mm (Includes -0.25mm Center Drop)`;
    } else {
        centerContainer.style.display = "none";
    }

    const tensionSpan = document.getElementById('rec-tension');
    if (res.error >= -0.15 && res.error <= 0.15) {
        tensionSpan.innerText = "🎯 Drop-In Fit (Optimal Fit)";
        tensionSpan.style.color = "#10b981";
    } else if (res.error > 0.15) {
        tensionSpan.innerText = `⚠️ Slack warning (+${res.error.toFixed(2)} mm loose). Add tensioner.`;
        tensionSpan.style.color = "#f59e0b";
    } else {
        tensionSpan.innerText = `❌ Interference warning (${res.error.toFixed(2)} mm too tight). Assembly will bind.`;
        tensionSpan.style.color = "#ef4444";
    }
}
