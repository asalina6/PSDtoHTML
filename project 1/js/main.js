window.onload=(function(){

    var checkbox = document.querySelector('input'),
        Logo = document.querySelector('#logo'),
        rightSide = document.querySelector('.background-image'),
        //day colors/images
        dayFont = getComputedStyle(document.documentElement).getPropertyValue('--font-color'),
        dayPanel = getComputedStyle(document.documentElement).getPropertyValue('--panel-color'),
        dayBackground = getComputedStyle(document.documentElement).getPropertyValue('--bg-color'),
        dayQuote = getComputedStyle(document.documentElement).getPropertyValue('--quote-color'),
        dayLearn = getComputedStyle(document.documentElement).getPropertyValue('--learn-color'),
        dayShadow = getComputedStyle(document.documentElement).getPropertyValue('--box-shadow');
        dayPanelShadow = getComputedStyle(document.documentElement).getPropertyValue('--panel-shadow');
        dayLogoPath='light-logo.png',
        dayRightPath = '/light-rightside.png',
        //night colors/images
        nightFont = getComputedStyle(document.documentElement).getPropertyValue('--font-night-color'),
        nightPanel = getComputedStyle(document.documentElement).getPropertyValue('--panel-night-color'),
        nightBackground = getComputedStyle(document.documentElement).getPropertyValue('--bg-night-color'),
        nightQuote = getComputedStyle(document.documentElement).getPropertyValue('--quote-night-color'),
        nightLearn = getComputedStyle(document.documentElement).getPropertyValue('--learn-night-color'),
        nightShadow = getComputedStyle(document.documentElement).getPropertyValue('--box-night-shadow'),
        nightPanelShadow = getComputedStyle(document.documentElement).getPropertyValue('--panel-night-shadow'),
        nightLogoPath='night-logo.png',
        nightRightPath = '/night-rightside.png';

    checkbox.addEventListener('click',isClicked);


    function isClicked(event){
        if(event.target.checked==true){
            document.documentElement.style.setProperty('--font-color', nightFont);
            document.documentElement.style.setProperty('--panel-color', nightPanel);
            document.documentElement.style.setProperty('--bg-color', nightBackground);
            document.documentElement.style.setProperty('--quote-color', nightQuote);
            document.documentElement.style.setProperty('--learn-color', nightLearn);
            document.documentElement.style.setProperty('--box-shadow', nightShadow);
            document.documentElement.style.setProperty('--panel-shadow', nightPanelShadow);
            Logo.src=nightLogoPath;
            rightSide.style.backgroundImage =`url(${nightRightPath})`;

        }else{
            document.documentElement.style.setProperty('--font-color',dayFont);
            document.documentElement.style.setProperty('--panel-color',dayPanel);
            document.documentElement.style.setProperty('--bg-color',dayBackground);
            document.documentElement.style.setProperty('--quote-color', dayQuote);
            document.documentElement.style.setProperty('--learn-color', dayLearn);
            document.documentElement.style.setProperty('--box-shadow', dayShadow);
            document.documentElement.style.setProperty('--panel-shadow', dayPanelShadow);
            Logo.src=dayLogoPath;
            rightSide.style.backgroundImage =`url(${dayRightPath})`;
        }
    }



})();