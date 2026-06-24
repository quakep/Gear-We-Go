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

function calculateCenterDistance(N_p, N_b, N_s, P) {
    const totalTeeth = N_b;
    const sumTeeth = N_p + N_s;
    const diffTeeth = Math.abs(N_p - N_s);

    const b = 2 * totalTeeth - Math.PI * sumTeeth;
    const discriminant = b * b - 32 * diffTeeth * diffTeeth;

    if (discriminant < 0) return null;

    const centerInPitches = (b + Math.sqrt(discriminant)) / 8;
    return centerInPitches * P;
}

function calculateEstimatedTeeth(N_p, N_s, C, P) {
    const sumTeeth = N_p + N_s;
    const diffTeeth = Math.abs(N_p - N_s);
    const centerInPitches = C / P;

    return 2 * centerInPitches + (sumTeeth / 2) + ((diffTeeth * diffTeeth) / (4 * Math.PI * Math.PI * centerInPitches));
}

function recommendSize() {
    const typeSelect = document.getElementById("type-select").value;
    const teeth1 = parseInt(document.getElementById("teeth1").value) || 0;
    const teeth2 = parseInt(document.getElementById("teeth2").value) || 0;
    const desiredCenter = parseFloat(document.getElementById("desired-center").value) || 0;

    if (teeth1 <= 0 || teeth2 <= 0 || desiredCenter <= 0) {
        alert("Please enter valid positive numbers for teeth and center distance.");
        return;
    }

    let pitch = 3;
    let isChain = false;
    let chainName = "";

    if (typeSelect.startsWith("rev-gt2")) {
        pitch = 3;
    } else if (typeSelect.startsWith("rev-rt25") || typeSelect === "rev-chain-25") {
        pitch = 6.35;
        if (typeSelect === "rev-chain-25") { isChain = true; chainName = "#25 Roller Chain"; }
    } else if (typeSelect === "rev-round") {
        pitch = 6.0; 
    } else if (typeSelect === "rev-chain-35") {
        pitch = 9.525;
        isChain = true;
        chainName = "#35 Heavy Chain";
    }

    let finalName = "";
    let finalDetail = "";
    let finalSku = "N/A";
    let finalCenter = 0;
    let finalChassisCenter = 0;
    let finalTension = "";

    if (isChain) {
        const exactTeeth = calculateEstimatedTeeth(teeth1, teeth2, desiredCenter, pitch);
        let idealLinks = Math.round(exactTeeth);
        
        if (idealLinks % 2 !== 0) {
            idealLinks = (idealLinks - exactTeeth > 0) ? idealLinks - 1 : idealLinks + 1;
        }

        finalName = chainName;
        finalDetail = `Cut to exact length: ${idealLinks} links`;
        finalSku = "Bulk Stock / Custom Cut";
        finalCenter = calculateCenterDistance(teeth1, idealLinks, teeth2, pitch);
        
        finalChassisCenter = finalCenter + 0.12; 
        
        const delta = finalCenter - desiredCenter;
        finalTension = `Chain calculated. Variance from target: ${delta.toFixed(2)} mm. ${delta > 0 ? 'Slightly longer.' : 'Slightly shorter.'}`;

    } else {
        const targetType = typeSelect.startsWith("rev-gt2") ? "gt2" : (typeSelect.startsWith("rev-rt25") ? "rt25" : "round");
        const filteredBelts = typeof productDatabase !== 'undefined' ? productDatabase.filter(p => p.type === targetType) : [];

        if (filteredBelts.length === 0 && targetType === "round") {
            const exactTeeth = Math.round(calculateEstimatedTeeth(teeth1, teeth2, desiredCenter, pitch));
            finalName = "Round Polyurethane 6mm Belt";
            finalDetail = `Custom Welded Loop: ${exactTeeth} teeth (${(exactTeeth * pitch).toFixed(1)} mm length)`;
            finalCenter = calculateCenterDistance(teeth1, exactTeeth, teeth2, pitch);
            finalChassisCenter = finalCenter - 0.2; 
            finalTension = "Custom Polyurethane belt requires thermal welding. Cut ~2-5% shorter for stretch tension.";
        } else if (filteredBelts.length === 0) {
            alert("Product database is missing or empty. Cannot recommend standard belt.");
            return;
        } else {
            let bestBelt = null;
            let minDelta = Infinity;
            let bestCenter = 0;

            filteredBelts.forEach(belt => {
                const center = calculateCenterDistance(teeth1, belt.teeth, teeth2, pitch);
                if (center !== null) {
                    const delta = Math.abs(center - desiredCenter);
                    if (delta < minDelta) {
                        minDelta = delta;
                        bestBelt = belt;
                        bestCenter = center;
                    }
                }
            });

            if (!bestBelt) {
                alert("Could not find a valid physical configuration for the given sprocket sizes and distance.");
                return;
            }

            finalName = bestBelt.name;
            finalDetail = `${bestBelt.teeth} Tooth Closed-Loop Belt`;
            finalSku = bestBelt.sku;
            finalCenter = bestCenter;
            
            finalChassisCenter = finalCenter + 0.05; 

            const delta = finalCenter - desiredCenter;
            if (Math.abs(delta) < 1.5) {
                finalTension = "Excellent Fit. Fits natively on standard center distances.";
            } else if (delta > 0) {
                finalTension = `Loose Fit (+${delta.toFixed(2)}mm over target). Requires a tensioner cam/bearing.`;
            } else {
                finalTension = `Tight Fit (${delta.toFixed(2)}mm under target). Mechanical adjustment or idler recommended.`;
            }
        }
    }

    document.getElementById("rec-name").innerText = finalName;
    document.getElementById("rec-detail").innerText = finalDetail;
    document.getElementById("rec-sku").innerText = finalSku;
    document.getElementById("rec-center").innerText = finalCenter ? `${finalCenter.toFixed(4)} mm` : "Invalid geometry";
    document.getElementById("rec-chassis-center").innerText = finalChassisCenter ? `${finalChassisCenter.toFixed(4)} mm` : "N/A";
    document.getElementById("rec-tension").innerText = finalTension;

    document.getElementById("results-panel").style.display = "block";
}