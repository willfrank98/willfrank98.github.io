class StickyNavigation {

    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.et-hero-tab').click(function () {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkTabContainerPosition() {
        let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
        if ($(window).scrollTop() > offset) {
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
        }
        else {
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function () {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
    }

}

new StickyNavigation();

//
// JS for project buttons
//
window.onload = function() {
    //TeamBuilder
    let teamBuilderModal = document.getElementById('TeamBuilder');
    let teamBuilderLink = document.querySelector(".item3");
    let teamBuilderClose = document.querySelector("#TeamBuilder > div > div.modal-header > span");
    
    //function which suppresses the link and opens the modal
    let clickFuncTB = function (event) {
        event.preventDefault();
        teamBuilderModal.style.display = "block";
    };
    
    //add the clickFunc to the link
    teamBuilderLink.addEventListener("click", clickFuncTB);
    
    //when the user clicks on <span> (x), close the modal
    teamBuilderClose.onclick = function () {
        teamBuilderModal.style.display = "none";
    }

    //AI Art
    let aiArtModal = document.getElementById("AIArt");
    let aiArtLink = document.querySelector(".item4");
    let aiArtClose = document.querySelector("#AIArt > div > div.modal-header > span");
    
    let clickFuncAA = function (event) {
        event.preventDefault();
        aiArtModal.style.display = "block";
    };
    
    aiArtLink.addEventListener("click", clickFuncAA);
    
    aiArtClose.onclick = function () {
        aiArtModal.style.display = "none";
    }
    
    //Day Planner
    let dayPlannerModal = document.getElementById("DayPlanner");
    let dayPlannerLink = document.querySelector(".item5");
    let dayPlannerClose = document.querySelector("#DayPlanner > div > div.modal-header > span");
    
    let clickFuncDP = function (event) {
        event.preventDefault();
        dayPlannerModal.style.display = "block";
    };
    
    dayPlannerLink.addEventListener("click", clickFuncDP);
    
    dayPlannerClose.onclick = function () {
        dayPlannerModal.style.display = "none";
    }

    //Logic Quest
    let logicQuestModal = document.getElementById("LogicQuest");
    let logicQuestLink = document.querySelector(".item6");
    let logicQuestClose = document.querySelector("#LogicQuest > div > div.modal-header > span");
    
    let clickFuncLQ = function (event) {
        event.preventDefault();
        logicQuestModal.style.display = "block";
    };
    
    logicQuestLink.addEventListener("click", clickFuncLQ);
    
    logicQuestClose.onclick = function () {
        logicQuestModal.style.display = "none";
    }

    //QtSE
    let qtSEModal = document.getElementById("QtSE");
    let qtSELink = document.querySelector(".item7");
    let qtSEClose = document.querySelector("#QtSE > div > div.modal-header > span");
    
    let clickFuncQS = function (event) {
        event.preventDefault();
        qtSEModal.style.display = "block";
    };
    
    qtSELink.addEventListener("click", clickFuncQS);
    
    qtSEClose.onclick = function () {
        qtSEModal.style.display = "none";
    }

    //Simon
    let simonModal = document.getElementById("Simon");
    let simonLink = document.querySelector(".item8");
    let simonClose = document.querySelector("#Simon > div > div.modal-header > span");
    
    let clickFuncSi = function (event) {
        event.preventDefault();
        simonModal.style.display = "block";
    };
    
    simonLink.addEventListener("click", clickFuncSi);
    
    simonClose.onclick = function () {
        simonModal.style.display = "none";
    }

    let marketModal = document.getElementById("MarketPredictions");
    let marketLink = document.querySelector(".item9");
    let marketClose = document.querySelector("#MarketPredictions > div > div.modal-header > span");
    
    let clickFuncMP = function (event) {
        event.preventDefault();
        marketModal.style.display = "block";
    };
    
    marketLink.addEventListener("click", clickFuncMP);
    
    marketClose.onclick = function () {
        marketModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == teamBuilderModal ||
            event.target == aiArtModal ||
            event.target == dayPlannerModal ||
            event.target == logicQuestModal ||
            event.target == qtSEModal ||
            event.target == simonModal) {
            teamBuilderModal.style.display = "none";
            aiArtModal.style.display = "none";
            dayPlannerModal.style.display = "none";
            logicQuestModal.style.display = "none";
            qtSEModal.style.display = "none";
            simonModal.style.display = "none";
        }
    }
}
