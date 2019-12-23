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
    $('#teambuilder-link').click((event) => {
        event.preventDefault();
        $('#TeamBuilder').show();
    })

    $('#TeamBuilder .close').click((event) => {
        $('#TeamBuilder').hide();
    })

    //AI Art
    $('#teambuilder-link').click((event) => {
        event.preventDefault();
        $('#TeamBuilder').show();
    })

    $('#TeamBuilder .close').click((event) => {
        $('#TeamBuilder').hide();
    })
    
    //Day Planner
    $('#teambuilder-link').click((event) => {
        event.preventDefault();
        $('#TeamBuilder').show();
    })

    $('#TeamBuilder .close').click((event) => {
        $('#TeamBuilder').hide();
    })

    //Logic Quest
    $('#teambuilder-link').click((event) => {
        event.preventDefault();
        $('#TeamBuilder').show();
    })

    $('#TeamBuilder .close').click((event) => {
        $('#TeamBuilder').hide();
    })

    //QtSE
    $('#teambuilder-link').click((event) => {
        event.preventDefault();
        $('#TeamBuilder').show();
    })

    $('#TeamBuilder .close').click((event) => {
        $('#TeamBuilder').hide();
    })

    //Simon
    $('#teambuilder-link').click((event) => {
        event.preventDefault();
        $('#TeamBuilder').show();
    })

    $('#TeamBuilder .close').click((event) => {
        $('#TeamBuilder').hide();
    })

    //Stock market predictions
    $('#teambuilder-link').click((event) => {
        event.preventDefault();
        $('#TeamBuilder').show();
    })

    $('#TeamBuilder .close').click((event) => {
        $('#TeamBuilder').hide();
    })

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target == teamBuilderModal ||
    //         event.target == aiArtModal ||
    //         event.target == dayPlannerModal ||
    //         event.target == logicQuestModal ||
    //         event.target == qtSEModal ||
    //         event.target == simonModal ||
    //         event.target == marketModal) {
    //         teamBuilderModal.style.display = "none";
    //         aiArtModal.style.display = "none";
    //         dayPlannerModal.style.display = "none";
    //         logicQuestModal.style.display = "none";
    //         qtSEModal.style.display = "none";
    //         simonModal.style.display = "none";
    //         marketModal.style.display = "none";
    //     }
    // }
}
