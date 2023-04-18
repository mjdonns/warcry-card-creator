var abilityTextHeight = 0;
renderAbilities = function(cardData) {
    // drawBackground();
    // drawModel(cardData.imageUrl, cardData.imageProperties);

    drawCardTranslationAbilities(cardData.cardTranslationAbilities);
    drawCardTitle(cardData.cardTitle);

    // 
    // 
    // Reset starting height every render
    abilityTextHeight = 600;
    drawAbilities();


    for (i = 0; i < cardData.tagRunemarksOne.length; i++) {
        drawTagRunemark(i, cardData.tagRunemarksOne[i], 1);
    }
    for (i = 0; i < cardData.tagRunemarksTwo.length; i++) {
        drawTagRunemark(i, cardData.tagRunemarksTwo[i], 2);
    }
    for (i = 0; i < cardData.tagRunemarksThree.length; i++) {
        drawTagRunemark(i, cardData.tagRunemarksThree[i], 3);
    }
    for (i = 0; i < cardData.tagRunemarksFour.length; i++) {
        drawTagRunemark(i, cardData.tagRunemarksFour[i], 4);
    }
    for (i = 0; i < cardData.tagRunemarksFive.length; i++) {
        drawTagRunemark(i, cardData.tagRunemarksFive[i], 5);
    }
    for (i = 0; i < cardData.tagRunemarksSix.length; i++) {
        drawTagRunemark(i, cardData.tagRunemarksSix[i], 6);
    }

};

drawAbilities = function() {
    var cards = getCheckboxCards();
    var yOffset = 50;

    for (i=0; i < $(cards).length; i++) {
        drawAbility2($(cards)[i], {x: 1000, y: abilityTextHeight + yOffset});
        yOffset = yOffset + 50;
    }
}

drawAbility2 = function(card, pixelPosition) {
    getContext().font = '28px Georgia, serif';
    getContext().fillStyle = 'black';
    getContext().textAlign = 'left';

    
    var dieRoll = getDieRoll($(card));
    var name = getName($(card));
    var text = getText($(card));

    var textblock = (function() {
        var txt = '';
        var txt = '[' + dieRoll + '] ' + name + ': ' + text;

        var lines = getLines(getContext(), txt, canvas.width - 1050)

        for (var i = 0; i < lines.length; i++) {
            var height = writeScaled(
                lines[i],
                {x: pixelPosition.x, y: pixelPosition.y+(i*35)}
            );
            abilityTextHeight = abilityTextHeight + height;

        }
    })();
}

drawCardTranslationAbilities = function(value) {
    getContext().font = '28px Georgia, serif';
    getContext().fillStyle = 'white';
    getContext().textAlign = 'center';
    writeScaled(value, {x: (1772/2), y: 55});
}

// i.e Unit name
drawCardTitle = function(value) {
    getContext().font = '92px rodchenkoctt';
    getContext().fillStyle = 'black';
    getContext().textAlign = 'center';
    writeScaled(value, {x: 1386, y: 10});
}


function drawImage(scaledPosition, scaledSize, image)
{
    if (image != null)
    {
        if (image.complete)
        {
            getContext().drawImage(image, scaledPosition.x, scaledPosition.y, scaledSize.x, scaledSize.y);
        }
        else
        {
            image.onload = function(){ drawImage(scaledPosition, scaledSize, image); };
        }
    }
}

function drawImageSrc(scaledPosition, scaledSize, imageSrc)
{
    if (imageSrc != null)
    {
        var image = new Image();
        image.onload = function(){ drawImage(scaledPosition, scaledSize, image); };
        image.src = imageSrc;
    }
}

function drawTagRunemark(index, runemark, row) {
    // draw the runemarks
    var positions = []

    if (row == 1 && document.getElementById('ability1-toggle').checked) {
        positions = [{x: 175, y: 225}, {x: 285, y: 225}, {x: 395, y: 225}, {x: 505, y: 225}];
    } else if (row == 2 && document.getElementById('ability2-toggle').checked) {
        positions = [{x: 175, y: 410}, {x: 285, y: 410}, {x: 395, y: 410}, {x: 505, y: 410}];
    } else if (row == 3 && document.getElementById('ability3-toggle').checked) {
        positions = [{x: 175, y: 580}, {x: 285, y: 580}, {x: 395, y: 580}, {x: 505, y: 580}];
    } else if (row == 4 && document.getElementById('ability4-toggle').checked) {
        positions = [{x: 175, y: 760}, {x: 285, y: 760}, {x: 395, y: 760}, {x: 505, y: 760}];
    } else if (row == 5 && document.getElementById('ability5-toggle').checked) {
        positions = [{x: 175, y: 940}, {x: 285, y: 940}, {x: 395, y: 940}, {x: 505, y: 940}];
    } else if (row == 6 && document.getElementById('ability6-toggle').checked) {
        positions = [{x: 175, y: 1115}, {x: 285, y: 1115}, {x: 395, y: 1115}, {x: 505, y: 1115}];
    }

    if (index >= positions.length) return;

    var img = $("#circle")[0],
        position = scalePixelPosition(positions[index]),
        size = scalePixelPosition({x: 90, y: 90});

    // position = scalePixelPosition({x: positions[index].x + 15, y: positions[index].y + 15});
    // size = scalePixelPosition({x: 130, y: 130});
    position = scalePixelPosition({x: positions[index].x, y: positions[index].y});

    drawImage(position, {x: 90, y: 90}, img);
    drawImageSrc(position, size, runemark);
}

getCanvas = function() {
    return document.getElementById("canvas");
}

getCheckboxCards = function(checkboxes) {
    var checkboxes = $('[type="checkbox"][id^="ability"][id$="toggle"]:checked');
    var cards = $(checkboxes).closest('[class="card"]');
    return cards;
}

getContext = function() {
    return getCanvas().getContext("2d");
}

getDieRoll = function(card) {
    var dieRollElement = $(card).find('[class="form-check-input"]:checked');
    var value = $(dieRollElement).val();
    return value;
}

getLines = function(ctx, text, maxWidth) {
    ctx = getContext();
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

getName = function(card) {
    var nameElement = $(card).find('[id$="-name"]');
    var value = nameElement.val();
    return value;
}

// All deps
getScalingFactor = function(canvas, warcryCardOne) {
    return {
        x: canvas.width / warcryCardOne.width,
        y: canvas.height / warcryCardOne.height
    };
}

scalePixelPosition = function(pixelPosition) {
    var scalingFactor = getScalingFactor(getCanvas(), getBackgroundImage());
    var scaledPosition = {x: pixelPosition.x * scalingFactor.x, y: pixelPosition.y * scalingFactor.y};
    return scaledPosition;
}

getText = function(card) {
    var textElement = $(card).find('[id$="-text"]');
    var value = textElement.val();
    return value;
}

// All deps
writeScaled = function(value, pixelPos) {
    var scaledPos = scalePixelPosition(pixelPos);
    var height = writeValue(getContext(), value, scaledPos);
    return height;
}

writeValue = function(ctx, value, pos) {
    var scale = getScalingFactor(getCanvas(), getBackgroundImage());
    pos = {x: pos.x / scale.x, y: pos.y / scale.y };

    ctx.save();
    ctx.scale(scale.x, scale.y);
    ctx.fillText(value, pos.x, pos.y);
    ctx.restore();
    let metrics = ctx.measureText(value);
    let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    return actualHeight;
}

