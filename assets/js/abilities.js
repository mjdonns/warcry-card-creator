



getBackgroundImage = function() {
    if (document.getElementById('select-bg-dark-102').checked) {
        return document.getElementById('bg-dark-102');

    } else if (document.getElementById('select-bg-dark-302').checked) {
        return document.getElementById('bg-dark-302');

    } else if (document.getElementById('select-bg-fire-102').checked) {
        return document.getElementById('bg-fire-102');

    } else if (document.getElementById('select-bg-light-102').checked) {
        return document.getElementById('bg-light-102');
    }
}

drawBackground = function() {
    getContext().drawImage(
        getBackgroundImage(), 0, 0, getCanvas().width, getCanvas().height);
}





drawCardElementFromInput = function(inputElement, pixelPosition) {
    var value = inputElement.value;
    writeScaled(value, pixelPosition);
}

drawCardElementFromInputId = function(inputId, pixelPosition) {
    drawCardElementFromInput(document.getElementById(inputId), pixelPosition);
}






function getLabel(element)
{
    return $(element).prop("labels")[0];
}

function getImage(element)
{
    return $(element).find("img")[0];
}

function getSelectedRunemark(radioDiv) {
    var checked = $(radioDiv).find('input:checked');
    if (checked.length > 0)
    {
        //console.log(getImage(getLabel(checked[0])).getAttribute("src"));
        return getImage(getLabel(checked[0])).getAttribute("src");
    }
    return null;
}

function setSelectedFactionRunemark(runemark){
    var factionRunemarksDiv = $("#factionRunemarkSelect");
    {
        var checked = factionRunemarksDiv.find('input:checked');
        for (var i = 0; i < checked.length; i++) {
            checked[i].checked = false;
        }
        var icons = factionRunemarksDiv.find('img');
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.backgroundColor = 'black';
        }
    }
        var queryString = "img[src='"+ runemark +"']";
        var imgs = factionRunemarksDiv.find(queryString);
        if (imgs.length > 0) {
            var checkbox = $(imgs[0].parentNode.parentNode).find('input')[0];
            checkbox.checked = true;
            imgs[0].style.backgroundColor = "#00bc8c";
        } else {
            var newDiv = addToImageCheckboxSelector(runemark, factionRunemarksDiv[0], 'black');
            $(newDiv).find('img')[0].style.backgroundColor = "#00bc8c";
            $(newDiv).find('input')[0].checked = true;
        }
}
function setSelectedSubfactionRunemark(runemark){
    var subfactionRunemarksDiv = $("#subfactionRunemarkSelect");
    {
        var checked = subfactionRunemarksDiv.find('input:checked');
        for (var i = 0; i < checked.length; i++) {
            checked[i].checked = false;
        }
        var icons = subfactionRunemarksDiv.find('img');
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.backgroundColor = 'black';
        }
    }
        var queryString = "img[src='"+ runemark +"']";
        var imgs = subfactionRunemarksDiv.find(queryString);
        if (imgs.length > 0) {
            var checkbox = $(imgs[0].parentNode.parentNode).find('input')[0];
            checkbox.checked = true;
            imgs[0].style.backgroundColor = "#00bc8c";
        } else {
            var newDiv = addToImageCheckboxSelector(runemark, subfactionRunemarksDiv[0], 'black');
            $(newDiv).find('img')[0].style.backgroundColor = "#00bc8c";
            $(newDiv).find('input')[0].checked = true;
        }
}
function getSelectedFactionRunemark() {
    return getSelectedRunemark($('#factionRunemarkSelect')[0]);
}

function getSelectedSubfactionRunemark() {
    return getSelectedRunemark($('#subfactionRunemarkSelect')[0]);
}

function getName()
{
    var textInput = $("#saveNameInput")[0];
    return textInput.value;
}

function setName(name)
{
    var textInput = $("#saveNameInput")[0];
    textInput.value = name;
}

function readtagRunemarksOne() {
    var array = new Array;

    var checkedBoxes = $("#tagRunemarkSelect_abilitiesCollapseFourOne").find('input:checked');

    for (i = 0; i < checkedBoxes.length; i++) {
        array.push(getImage(getLabel(checkedBoxes[i])).getAttribute("src"));
    }
    return array;
}
function readTagRunemarksTwo() {
    var array = new Array;

    var checkedBoxes = $("#tagRunemarkSelect_abilitiesCollapseFourTwo").find('input:checked');

    for (i = 0; i < checkedBoxes.length; i++) {
        array.push(getImage(getLabel(checkedBoxes[i])).getAttribute("src"));
    }
    return array;
}
function readTagRunemarksThree() {
    var array = new Array;

    var checkedBoxes = $("#tagRunemarkSelect_abilitiesCollapseFourThree").find('input:checked');

    for (i = 0; i < checkedBoxes.length; i++) {
        array.push(getImage(getLabel(checkedBoxes[i])).getAttribute("src"));
    }6
    return array;
}
function readTagRunemarksFour() {
    var array = new Array;

    var checkedBoxes = $("#tagRunemarkSelect_abilitiesCollapseFourFour").find('input:checked');

    for (i = 0; i < checkedBoxes.length; i++) {
        array.push(getImage(getLabel(checkedBoxes[i])).getAttribute("src"));
    }
    return array;
}
function readTagRunemarksFive() {
    var array = new Array;

    var checkedBoxes = $("#tagRunemarkSelect_abilitiesCollapseFourFifth").find('input:checked');

    for (i = 0; i < checkedBoxes.length; i++) {
        array.push(getImage(getLabel(checkedBoxes[i])).getAttribute("src"));
    }
    return array;
}
function readTagRunemarksSix() {
    var array = new Array;

    var checkedBoxes = $("#tagRunemarkSelect_abilitiesCollapseFourSixth").find('input:checked');

    for (i = 0; i < checkedBoxes.length; i++) {
        array.push(getImage(getLabel(checkedBoxes[i])).getAttribute("src"));
    }
    return array;
}

function setSelectedTagRunemarks(selectedRunemarksArray){
    // var tagRunemarksDiv = $('#tagRunemarkSelect');
    var tagRunemarksDiv = $("[id^='tagRunemarkSelect_']");
    {
        var checked = tagRunemarksDiv.find('input:checked');
        for (var i = 0; i < checked.length; i++) {
            checked[i].checked = false;
        }
        var icons = tagRunemarksDiv.find('img');
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.backgroundColor = 'white';
        }
    }
    for (var i = 0; i < selectedRunemarksArray.length; i++) {
        var runemark = selectedRunemarksArray[i];
        var queryString = "img[src='"+ runemark +"']";
        var imgs = tagRunemarksDiv.find(queryString);
        if (imgs.length > 0) {
            var checkbox = $(imgs[0].parentNode.parentNode).find('input')[0];
            checkbox.checked = true;
            imgs[0].style.backgroundColor = "#00bc8c";
        } else {
            var newDiv = addToImageCheckboxSelector(runemark, tagRunemarksDiv[0], 'white');
            $(newDiv).find('img')[0].style.backgroundColor = "#00bc8c";
            $(newDiv).find('input')[0].checked = true;
        }
    }
}

function readControls()
{
    var data = new Object;
    data.name = getName();
    // data.imageUrl = getModelImage();
    // data.imageProperties = getModelImageProperties();

    data.cardTranslationAbilities = document.getElementById('card-translation-abilities').value;
    data.cardTitle = document.getElementById('card-title').value;

    data.factionRunemark = getSelectedFactionRunemark();
    data.subfactionRunemark = getSelectedSubfactionRunemark();

    data.ability1Name = document.getElementById('ability1-name').value;
    data.ability2Name = document.getElementById('ability2-name').value;
    data.ability3Name = document.getElementById('ability3-name').value;
    data.ability4Name = document.getElementById('ability4-name').value;
    data.ability5Name = document.getElementById('ability5-name').value;
    data.ability6Name = document.getElementById('ability6-name').value;

    data.ability1Text = document.getElementById('ability1-text').value;
    data.ability2Text = document.getElementById('ability2-text').value;
    data.ability3Text = document.getElementById('ability3-text').value;
    data.ability4Text = document.getElementById('ability4-text').value;
    data.ability5Text = document.getElementById('ability5-text').value;
    data.ability6Text = document.getElementById('ability6-text').value;

    // data.toughness = document.getElementById("toughness").value;
    // data.wounds = document.getElementById("numWounds").value;
    // data.move = document.getElementById("movement").value;
    // data.pointCost = document.getElementById("pointCost").value;

    data.tagRunemarksOne = readtagRunemarksOne();
    data.tagRunemarksTwo = readTagRunemarksTwo();
    data.tagRunemarksThree = readTagRunemarksThree();
    data.tagRunemarksFour = readTagRunemarksFour();
    data.tagRunemarksFive = readTagRunemarksFive();
    data.tagRunemarksSix = readTagRunemarksSix();

    // data.weapon1 = readWeaponControls("#weapon1");
    // data.weapon2 = readWeaponControls("#weapon2");
    return data;
}

function drawFactionRunemark(image) {
    // drawImageSrc({x: 57.5, y: 57.5}, {x: 100, y: 100}, image);
    drawImageSrc({x: 92.5, y: 35}, {x: 135, y: 135}, image);
	if(getSelectedSubfactionRunemark() == null || getSelectedSubfactionRunemark() == 'assets/img/blank.gif'){
		if (document.getElementById('ability1-toggle').checked) {
			var positions = {x: 60, y: 225},
				replacedImage = image.replace('white', 'black');
			drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
			drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
		}

		if (document.getElementById('ability2-toggle').checked) {
			var positions = {x: 60, y: 405},
				replacedImage = image.replace('white', 'black');
			drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
			drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
		}

		if (document.getElementById('ability3-toggle').checked) {
			var positions = {x: 60, y: 575},
				replacedImage = image.replace('white', 'black');
			drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
			drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
		}

		if (document.getElementById('ability4-toggle').checked) {
			var positions = {x: 60, y: 755},
				replacedImage = image.replace('white', 'black');
			drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
			drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
		}

		if (document.getElementById('ability5-toggle').checked) {
			var positions = {x: 60, y: 935},
				replacedImage = image.replace('white', 'black');
			drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
			drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
		}

		if (document.getElementById('ability6-toggle').checked) {
			var positions = {x: 60, y: 1110},
				replacedImage = image.replace('white', 'black');
			drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
			drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
		}
	}

}
function drawSubfactionRunemark(image) {
    // drawImageSrc({x: 57.5, y: 57.5}, {x: 90, y: 90}, image);
    drawImageSrc({x: 224, y: 58}, {x: 90, y: 90}, image);

    if (document.getElementById('ability1-toggle').checked) {
        var positions = {x: 65, y: 225},
            replacedImage = image.replace('white', 'black');
        drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
        drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
    }

    if (document.getElementById('ability2-toggle').checked) {
        var positions = {x: 65, y: 410},
            replacedImage = image.replace('white', 'black');
        drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
        drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
    }

    if (document.getElementById('ability3-toggle').checked) {
        var positions = {x: 65, y: 580},
            replacedImage = image.replace('white', 'black');
        drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
        drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
    }

    if (document.getElementById('ability4-toggle').checked) {
        var positions = {x: 65, y: 760},
            replacedImage = image.replace('white', 'black');
        drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
        drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
    }

    if (document.getElementById('ability5-toggle').checked) {
        var positions = {x: 65, y: 940},
            replacedImage = image.replace('white', 'black');
        drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
        drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
    }

    if (document.getElementById('ability6-toggle').checked) {
        var positions = {x: 65, y: 1115},
            replacedImage = image.replace('white', 'black');
        drawImage(positions, {x: 90, y: 90}, $("#circle")[0]);
        drawImageSrc(positions, {x: 90, y: 90}, replacedImage);
    }
}

render = function(cardData) {
    drawBackground();
    renderAbilities();
    drawFactionRunemark(cardData.factionRunemark);
    drawSubfactionRunemark(cardData.subfactionRunemark);

};

function writeControls(cardData)
{
    setName(cardData.name);
    // setModelImage(cardData.imageUrl);
    // setModelImageProperties(cardData.imageProperties);

    $('#card-title').value = cardData.cardTitle;
    $('#card-translation-abilities').value = cardData.cardTranslationAbilities;
    $('#card-translation-double').value = cardData.cardTranslationDouble;
    $('#card-translation-triple').value = cardData.cardTranslationTriple;
    $('#card-translation-quad').value = cardData.cardTranslationQuad;

    setSelectedFactionRunemark(cardData.factionRunemark);

    setSelectedSubfactionRunemark(cardData.subfactionRunemark);

     $('#ability1-name').value = cardData.ability1Name;
     $('#ability2-name').value = cardData.ability2Name;
     $('#ability3-name').value = cardData.ability3Name;
     $('#ability4-name').value = cardData.ability4Name;
     $('#ability5-name').value = cardData.ability5Name;
     $('#ability6-name').value = cardData.ability6Name;

     $('#ability1-text').text(cardData.ability1Text);
     $('#ability2-text').text(cardData.ability2Text);
     $('#ability3-text').text(cardData.ability3Text);
     $('#ability4-text').text(cardData.ability4Text);
     $('#ability5-text').text(cardData.ability5Text);
     $('#ability6-text').text(cardData.ability6Text);

    // $("#toughness")[0].value = cardData.toughness;
    // $("#numWounds")[0].value = cardData.wounds;
    // $("#movement")[0].value = cardData.move;
    // $("#pointCost")[0].value = cardData.pointCost;

    var runes_one = cardData.tagRunemarksOne,
        runes_two = cardData.tagRunemarksTwo,
        runes_three = cardData.tagRunemarksThree,
        runes_four = cardData.tagRunemarksFour,
        runes_five = cardData.tagRunemarksFive,
        runes_six = cardData.tagRunemarksSix
    var tagRuneMarks = $.merge(runes_one, runes_two, runes_three, runes_four, runes_five, runes_six)

    setSelectedTagRunemarks(tagRuneMarks);

    // writeWeaponControls("#weapon1", cardData.weapon1, "weapon1");
    // writeWeaponControls("#weapon2", cardData.weapon2, "weapon2");
}

function defaultCardData() {
    var cardData = new Object;
    cardData.name = 'Default';
    // cardData.imageUrl = null;
    // cardData.imageProperties = getDefaultModelImageProperties();

    cardData.cardTitle = 'Iron Golem';
    cardData.cardTranslationAbilities = 'Abilities';
    cardData.cardTranslationDouble = 'Double';
    cardData.cardTranslationTriple = 'Triple';
    cardData.cardTranslationQuad = 'Quad';

    cardData.factionRunemark = 'runemarks/white/factions-chaos-iron-golems.svg';
    cardData.subfactionRunemark = 'assets/img/blank.gif';

    cardData.ability1Name = 'First ability name';
    cardData.ability2Name = 'Second ability name';
    cardData.ability3Name = 'Third ability name';
    cardData.ability4Name = 'Fourth ability name';
    cardData.ability5Name = 'Fifth ability name';
    cardData.ability6Name = 'Sixth ability name';

    cardData.ability1Text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\nAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis\ndis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque\neu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.';
    cardData.ability2Text = 'Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit.\nAenean commodo ligula eget dolor.';
    cardData.ability3Text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\nAenean commodo ligula eget dolor.';
    cardData.ability4Text = 'Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit.\nAenean commodo ligula eget dolor.';
    cardData.ability5Text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\nAenean commodo ligula eget dolor.';
    cardData.ability6Text = 'Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit.\nAenean commodo ligula eget dolor.';

    // cardData.toughness = 4;
    // cardData.wounds = 15;
    // cardData.move = 5;
    // cardData.pointCost = 125;

    cardData.tagRunemarksOne = new Array;
    cardData.tagRunemarksOne.push('runemarks/black/fighters-berserker.svg');

    cardData.tagRunemarksTwo = new Array;
    cardData.tagRunemarksThree = new Array;
    cardData.tagRunemarksFour = new Array;
    cardData.tagRunemarksFive = new Array;
    cardData.tagRunemarksSix = new Array;

    // cardData.weapon1 = getDefaultWeaponData1();
    // cardData.weapon2 = getDefaultWeaponData2();
    return cardData;
}

function saveCardDataMap(newMap)
{
    window.localStorage.setItem("cardDataMap", JSON.stringify(newMap));
}

function loadCardDataMap()
{
    var storage = window.localStorage.getItem("cardDataMap");
    if (storage != null)
    {
        return JSON.parse(storage);
    }
    // Set up the map.
    var map = new Object;
    map["Default"] = defaultCardData();
    saveCardDataMap(map);
    return map;
}

function loadLatestCardData()
{
    var latestFighterName = window.localStorage.getItem("latestFighterName");
    if (latestFighterName == null)
    {
        latestFighterName = "Default";
    }

    console.log("Loading '" + latestFighterName + "'...");

    var data = loadCardData(latestFighterName);

    if (data)
    {
        console.log("Loaded data:");
        console.log(data);
    }
    else
    {
        console.log("Failed to load a fighter data.");
    }

    return data;
}

function saveLatestCardData()
{
    var cardData = readControls();
    if (!cardData.name)
    {
        return;
    }

    window.localStorage.setItem("latestFighterName", cardData.name);
    saveCardData(cardData);
}

function loadCardData(cardDataName)
{
    if (!cardDataName)
    {
        return null;
    }

    var map = loadCardDataMap();
    if (map[cardDataName])
    {
        return map[cardDataName];
    }

    return null;
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL;
}

function onload2promise(obj){
    return new Promise((resolve, reject) => {
        obj.onload = () => resolve(obj);
        obj.onerror = reject;
    });
}

async function getBase64ImgFromUrl(imgUrl){
    let img = new Image();
    let imgpromise = onload2promise(img); // see comment of T S why you should do it this way.
    img.src = imgUrl;
    await imgpromise;
    var imgData = getBase64Image(img);
    return imgData;
}

async function handleImageUrlFromDisk(imageUrl)
{
    if (imageUrl &&
        imageUrl.startsWith("blob:"))
    {
        // The image was loaded from disk. So we can load it later, we need to stringify it.
        imageUrl = await getBase64ImgFromUrl(imageUrl);
    }

    return imageUrl;
}

async function saveCardData(cardData)
{
    var finishSaving = function()
    {
        var map = loadCardDataMap();
        map[cardData.name] = cardData;
        window.localStorage.setItem("cardDataMap", JSON.stringify(map));
    };

    if (cardData != null &&
        cardData.name)
    {
        // handle images we may have loaded from disk...
        cardData.imageUrl = await handleImageUrlFromDisk(cardData.imageUrl);
        cardData.factionRunemark = await handleImageUrlFromDisk(cardData.factionRunemark);
        cardData.subfactionRunemark = await handleImageUrlFromDisk(cardData.subfactionRunemark);

        for (i = 0; i < cardData.tagRunemarksOne.length; i++)
        {
            cardData.tagRunemarksOne[i] = await handleImageUrlFromDisk(cardData.tagRunemarksOne[i]);
        }
        for (i = 0; i < cardData.tagRunemarksTwo.length; i++)
        {
            cardData.tagRunemarksTwo[i] = await handleImageUrlFromDisk(cardData.tagRunemarksTwo[i]);
        }
        for (i = 0; i < cardData.tagRunemarksThree.length; i++)
        {
            cardData.tagRunemarksThree[i] = await handleImageUrlFromDisk(cardData.tagRunemarksThree[i]);
        }
        for (i = 0; i < cardData.tagRunemarksFour.length; i++)
        {
            cardData.tagRunemarksFour[i] = await handleImageUrlFromDisk(cardData.tagRunemarksFour[i]);
        }
        for (i = 0; i < cardData.tagRunemarksFive.length; i++)
        {
            cardData.tagRunemarksFive[i] = await handleImageUrlFromDisk(cardData.tagRunemarksFive[i]);
        }
        for (i = 0; i < cardData.tagRunemarksSix.length; i++)
        {
            cardData.tagRunemarksSix[i] = await handleImageUrlFromDisk(cardData.tagRunemarksSix[i]);
        }

        // cardData.weapon1.runemark = await handleImageUrlFromDisk(cardData.weapon1.runemark);
        // cardData.weapon2.runemark = await handleImageUrlFromDisk(cardData.weapon2.runemark);

        finishSaving();
    }
}

function getLatestCardDataName()
{
    return "latestCardData";
}

window.onload = function() {
    //window.localStorage.clear();
    var cardData = loadLatestCardData();
    writeControls(cardData);
    render(cardData);
    refreshSaveSlots();
}

onAnyChange = function() {
    var cardData = readControls();
    render(cardData);
    saveLatestCardData();
}

function onWeaponControlsToggled(weaponCheckbox) {
    var controlsDiv = $(weaponCheckbox.parentNode).find("#weaponInputs")[0];
    controlsDiv.style.display = weaponCheckbox.checked ? "block" : "none";

    onAnyChange();
}

onWeaponMinRangeChanged = function(minRange) {
    var maxRange = $(minRange.parentNode).find("#rangeMax")[0];
    maxRange.value = Math.max(minRange.value, maxRange.value);

    onAnyChange();
}

onWeaponMaxRangeChanged = function(maxRange) {
    var minRange = $(maxRange.parentNode).find("#rangeMin")[0];
    minRange.value = Math.min(maxRange.value, minRange.value);

    onAnyChange();
}

onRunemarkSelectionChanged = function(radioButton, backgroundColor)
{
    var radioSection = radioButton.parentNode.parentNode;
    var allRadioButtons = $('input', radioSection);

    for (i = 0; i < allRadioButtons.length; i++)
    {
        getImage(getLabel(allRadioButtons[i])).style.backgroundColor = backgroundColor;
    }

    // getImage(getLabel(radioButton)).style.backgroundColor = "tomato";
    getImage(getLabel(radioButton)).style.backgroundColor = "#00bc8c";

    onAnyChange();
}

onTagRunemarkSelectionChanged = function(checkbox, backgroundColor)
{
    // getImage(getLabel(checkbox)).style.backgroundColor = checkbox.checked ? "tomato" : backgroundColor;
    getImage(getLabel(checkbox)).style.backgroundColor = checkbox.checked ? "#00bc8c" : backgroundColor;
    onAnyChange();
}

addToImageRadioSelector = function(imageSrc, imageSelector, radioGroupName, bgColor)
{
    var div = document.createElement('div');
    div.setAttribute('class', 'mr-0');
    div.innerHTML = `
        <label for="${ radioGroupName }-${ imageSrc }"><img src="${ imageSrc }" width="50" height="50" alt="" style="background-color:${ bgColor };"></label>
        <input type="radio" style="display:none;" name="${ radioGroupName }" id="${ radioGroupName }-${ imageSrc }" onchange="onRunemarkSelectionChanged(this, '${ bgColor }')">
    `;
    imageSelector.appendChild(div);
    return div;
}

onFactionRunemarkFileSelect = function()
{
    var imageSelect = $("#additionalFactionMarkSelect")[0];
    var selectGrid = $("#factionRunemarkSelect")[0];

    for (i = 0; i < imageSelect.files.length; i++)
    {
        addToImageRadioSelector(URL.createObjectURL(imageSelect.files[i]), selectGrid, "faction", "black");
    }
}

onSubfactionRunemarkFileSelect = function()
{
    var imageSelect = $("#additionalSubfactionMarkSelect")[0];
    var selectGrid = $("#subfactionRunemarkSelect")[0];

    for (i = 0; i < imageSelect.files.length; i++)
    {
        addToImageRadioSelector(URL.createObjectURL(imageSelect.files[i]), selectGrid, "subfaction", "black");
    }
}

onWeaponRunemarkFileSelect = function(input, weaponName)
{
    var grid = $(input.parentNode).find("#weaponRunemarkSelect")[0];

    for (i = 0; i < input.files.length; i++)
    {
        addToImageRadioSelector(URL.createObjectURL(input.files[i]), grid, weaponName, "white");
    }
}

function addToImageCheckboxSelector(imgSrc, grid, bgColor)
{
    var div = document.createElement('div');
    div.setAttribute('class', 'mr-0');
    div.innerHTML = `
    <label for="checkbox-${ imgSrc }">
        <img src="${ imgSrc }" width="50" height="50" alt="" style="background-color:${ bgColor };">
    </label>
    <input type="checkbox" style="display:none;" id="checkbox-${ imgSrc }" onchange="onTagRunemarkSelectionChanged(this, '${ bgColor }')">
    `;
    // grid.appendChild(div);
    return div;
}

function onTagRunemarkFileSelect()
{
    var imageSelect = $("#additionalTagMarkSelect")[0];
    // var selectGrid = $("#tagRunemarkSelect")[0];
    var selectGrid = $("[id^='tagRunemarkSelect_']")[0];

    for (i = 0; i < imageSelect.files.length; i++)
    {
        addToImageCheckboxSelector(URL.createObjectURL(imageSelect.files[i]), selectGrid, "white");
    }
}

function onClearCache()
{
    window.localStorage.clear();
    location.reload();
    return false;
}

function onResetToDefault()
{
    var cardData = defaultCardData();
    writeControls(cardData);
    render(cardData);
}

function refreshSaveSlots()
{
    // Remove all
    $('select').children('option').remove();

    var cardDataName = readControls().name;

    var map = loadCardDataMap();

    for (let [key, value] of Object.entries(map)) {
        var selected = false;
        if (cardDataName &&
            key == cardDataName)
        {
            selected = true;
        }
        var newOption = new Option(key, key, selected, selected);
        $('#saveSlotsSelect').append(newOption);
    }
}

function onSaveClicked()
{
    var cardData = readControls();
    console.log("Saving '" + cardData.name + "'...");
    saveCardData(cardData);
    refreshSaveSlots();
}

function onLoadClicked()
{
    var cardDataName = $('#saveSlotsSelect').find(":selected").text();
    console.log("Loading '" + cardDataName + "'...");
    cardData = loadCardData(cardDataName);
    writeControls(cardData);
    render(cardData);
    refreshSaveSlots();
}

function onDeleteClicked()
{
    var cardDataName = $('#saveSlotsSelect').find(":selected").text();

    console.log("Deleting '" + cardDataName + "'...");

    var map = loadCardDataMap();
    delete map[cardDataName];

    saveCardDataMap(map);

    refreshSaveSlots();
}

// …
// …
// …

function saveCardAsImage() {
    var element = document.createElement('a');
    element.setAttribute('href', document.getElementById('canvas').toDataURL('image/png'));
    element.setAttribute('download', 'warcry-ability-card.png');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

$(document).ready(function() {
    var c=document.getElementById('canvas');
    var ctx=c.getContext('2d');
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    // ctx.stroke();
});
