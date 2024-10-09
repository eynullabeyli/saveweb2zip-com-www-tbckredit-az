var isMobile = false;
if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
    )
)
    isMobile = true;
if (isMobile) {
    var show_map_zoom = false;
} else {
    var show_map_zoom = true;
}
$(function () {
    Page.init();
    if ($("span.page-info").hasClass("home")) Slider.init();
    Ads.init();
    Calculator.init();
    GMap.init();
});
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var Page = {
    init: function () {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("html").addClass("web_it");
        } else {
            $("html").addClass("mob_it");
        }
        $(".phone").keydown(function (e) {
            var key = e.charCode || e.keyCode || 0;
            return key == 8 || key == 9 || key == 46 || key == 187 || key == 107 || (key >= 37 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105);
        });
        var obj = $(".switch a[data-val='" + getCookie("curr") + "']");
        if (obj.length) obj.trigger("click");
        if ($(".mob_it").length > 0) {
            if ($(".sub_links").length > 0) {
                var subs = $(".sub_links").html();
                if ($(".only_career").length) {
                    $(".only_career").append("<h2>" + $(".cl_title").text() + "</h2>");
                    $(".only_career").append("<div class='sub_links clear'>" + subs + "</div>");
                } else {
                    $(".page_title").append("<div class='sub_links clear'>" + subs + "</div>");
                }
                if ($(".no_title_mobile").length) {
                    setTimeout(function () {
                        $(".mps_ad > *").remove();
                    }, 50);
                }
            }
            $(".main_navigator li:not(:last-child) a").each(function () {
                var dM = $(this).attr("data-mobile-url");
                $(this).attr("href", dM);
            });
            $(document).on("click", ".main_navigator li:last-child a", function (e) {
                e.preventDefault();
                $("body").addClass("show_mobile_br");
                setTimeout(function () {
                    $("body").addClass("hide_content_side");
                }, 400);
            });
            $(document).on("click", ".close_branches", function (e) {
                $("body").removeClass("hide_content_side");
                $("body").removeClass("show_mobile_br");
            });
            $(".menu_opener").removeClass("ajax-link").removeClass("active").removeClass("no-click").attr("href", "javascript:void(0)");
        } else {
            if ($(".main_navigator").length > 0) {
                $(".logo").removeClass("ajax-link");
                $(document).on("click", ".page-inner-wrap .logo", function (e) {
                    e.preventDefault();
                    $(".mps_scroller_self").css("top", 0);
                    $(".main_navigator li").removeClass("active");
                    $("body").removeClass("show_blist");
                    var selected = $(".flickity-slider").find(".cell.is-selected");
                    if (selected.hasClass("black")) {
                        $(".top_bar, .bottom_bar").addClass("black");
                        $(".flickity-button.flickity-prev-next-button").addClass("black");
                    } else {
                        $(".top_bar, .bottom_bar").removeClass("black");
                        $(".flickity-button.flickity-prev-next-button").removeClass("black");
                    }
                    var t = $(this),
                        url = t.attr("href");
                    window.history.pushState({ url: url }, "", url);
                });
            } else {
                $(".logo").addClass("ajax-link");
            }
        }
        var activeMenu = $(".main_navigator li.active");
        if (activeMenu.length) {
            activeMenu.find("a").first().click();
        }
        if (isMobile) {
            if ($(".inner_calc").hasClass("no_move")) {
                $(".inner_calc").insertAfter($(".page_title_here"));
            } else {
                $(".inner_calc").insertAfter($(".page_title_here"));
            }
        }
    },
    load: function (url, hist, lang) {
        var page = $("html");
        if (page.hasClass("loading")) return false;
        $.ajax({
            url: url,
            type: "get",
            dataType: "text",
            beforeSend: function () {
                page.addClass("loading");
                $(".content_side .menu").hide();
                $("body").removeClass("show_blist");
                $(".top_bar, .bottom_bar").removeClass("black");
            },
        })
            .done(function (html) {
                var data = $("<section>" + html + "</section>");
                if (data && data.length > 0) {
                    if (hist) {
                        window.history.pushState({ url: url }, "", url);
                        document.title = data.find(".page-info").attr("data-title");
                    }
                    if (lang) {
                        page.attr("lang", lang);
                    }
                    var infoSpan = $("span.page-info"),
                        pageInnerWrap = $(".page-inner-wrap"),
                        leftContent = $(".content_side"),
                        rightContent = $(".mp_scrller"),
                        branchContent = $(".bottom_brach_list"),
                        newInfoSpan = data.find("span.page-info"),
                        newPageInnerWrap = data.find(".page-inner-wrap"),
                        newLeftContent = data.find(".content_side"),
                        newRightContent = data.find(".mp_scrller"),
                        newBranchContent = data.find(".bottom_brach_list");
                    $(".main_page_nav_m, .cs_main_side").html("");
                    if (newPageInnerWrap.hasClass("home")) {
                        pageInnerWrap.addClass("home").removeClass("inner_page");
                    } else if (newPageInnerWrap.hasClass("inner_page")) {
                        pageInnerWrap.addClass("inner_page").removeClass("home");
                    } else {
                        pageInnerWrap.removeClass("home inner_page");
                    }
                    setTimeout(function () {
                        infoSpan.after(newInfoSpan).remove();
                        leftContent.after(newLeftContent).remove();
                        rightContent.after(newRightContent).remove();
                        branchContent.after(newBranchContent).remove();
                        if (lang) {
                            var topBar = $(".top_bar"),
                                bottomBar = $(".bottom_bar"),
                                orderForm = $(".order_form"),
                                leasingForm = $(".leasing_form"),
                                careerForm = $(".career_form"),
                                newTopBar = data.find(".top_bar"),
                                newBottomBar = data.find(".bottom_bar"),
                                newOrderForm = data.find(".order_form"),
                                newLeasingForm = data.find(".leasing_form"),
                                newCareerForm = data.find(".career_form");
                            topBar.after(newTopBar).remove();
                            bottomBar.after(newBottomBar).remove();
                            orderForm.after(newOrderForm).remove();
                            leasingForm.after(newLeasingForm).remove();
                            careerForm.after(newCareerForm).remove();
                        }
                        page.removeClass("loading");
                        $("body").removeClass("open_menu");
                        Page.init();
                        if (newInfoSpan.hasClass("home")) {
                            Slider.init();
                            Ads.init();
                        } else {
                            Slider.destroy();
                        }
                        if ($(".lit_ads").length > 0) {
                            Ads.init();
                        }
                        Calculator.init();
                        GMap.init();
                    }, 300);
                }
                return false;
            })
            .fail(function (err) {
                console.error(err);
            });
    },
    resize: function () {
        var wW = $(window).width();
        wH = $(window).height();
    },
};
$(document).on("click", ".menu_opener:not(.no-click)", function (e) {
    var t = $(this);
    if (t.hasClass("active")) {
        t.removeClass("active");
        $("body").removeClass("open_menu");
        $(".menu").fadeOut(100);
        $(".cs_main_side").fadeIn();
    } else {
        t.addClass("active");
        $("body").addClass("open_menu");
        $(".menu").fadeIn();
    }
});
var isMobile = false;
if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
    )
)
    isMobile = true;
var timeouts = [];
var Slider = {
    destroy: function () {
        $.each(timeouts, function (index, timeout) {
            clearInterval(timeout);
        });
    },
    init: function () {
        $.each($(".main-carousel"), function (index, item) {
            var $carousel = $(item),
                options = {
                    cellAlign: "left",
                    contain: true,
                    wrapAround: true,
                    pageDots: false,
                    autoPlay: 5000,
                    pauseAutoPlayOnHover: false,
                    on: {
                        ready: function () {
                            if ($(".page-info").hasClass("home")) {
                                var selected = $carousel.find(".cell.is-selected");
                                if (selected.hasClass("black")) {
                                    $(".top_bar, .bottom_bar").addClass("black");
                                    $(".flickity-button.flickity-prev-next-button").addClass("black");
                                } else {
                                    $(".top_bar, .bottom_bar").removeClass("black");
                                    $(".flickity-button.flickity-prev-next-button").removeClass("black");
                                }
                            }
                        },
                        change: function (index) {
                            var pT = $(".mps_scroller_self").offset().top;
                            if (pT == 0) {
                                var selected = $carousel.find(".cell.is-selected");
                                if (selected.hasClass("black")) {
                                    $(".top_bar, .bottom_bar").addClass("black");
                                    $(".flickity-button.flickity-prev-next-button").addClass("black");
                                } else {
                                    $(".top_bar, .bottom_bar").removeClass("black");
                                    $(".flickity-button.flickity-prev-next-button").removeClass("black");
                                }
                            }
                        },
                    },
                };
            if ($carousel.closest(".mobile_slider").length) options.draggable = false;
            $carousel.flickity(options);
        });
        if ($(".web_it").length > 0) {
        }
        if ($(".page-inner").find(".home").length) {
            $(".mps_item").removeClass("active");
            var sI = $(".main_navigator li.active").index() || 1;
            $(".mps_item").eq(sI).addClass("active");
        }
    },
};
var Ads = {
    init: function () {
        $(".lit_ads").flickity({ prevNextButtons: false, cellAlign: "left", contain: true });
        $(".mpa_wrap").addClass("show");
    },
};
var Calculator = {
    calculateLeasing: function (calc, data, currency, price, engine, down_paid, month) {
        var result = false,
            price = parseInt(price),
            engine = parseInt(engine),
            down_paid = parseInt(down_paid),
            month = parseInt(month),
            dp = (parseInt(down_paid) * 100) / parseInt(price),
            amount = price - down_paid;
        if (amount > data[currency]["max_amount"]) {
            down_paid = price - data[currency]["max_amount"];
            calc.find(".calc_dp input").val(down_paid).change();
            return false;
        } else if (price <= down_paid) {
            down_paid = price - 1000;
            calc.find(".calc_dp input").val(down_paid).change();
            return false;
        }
        try {
            var amounts = data[currency]["data"];
            $(Object.keys(amounts)).each(function (index, key) {
                var amounts_row = amounts[key];
                if (parseInt(amounts_row.from) <= amount && amount <= parseInt(amounts_row.to)) {
                    var engines = amounts_row["data"];
                    $(Object.keys(engines)).each(function (index, key) {
                        var engines_row = engines[key];
                        if (parseInt(engines_row.from) <= engine && engine <= parseInt(engines_row.to)) {
                            var dps = engines_row["data"];
                            $(Object.keys(dps)).each(function (index, key) {
                                var dps_row = dps[key];
                                if (parseInt(dps_row.from) <= dp && dp <= parseInt(dps_row.to)) {
                                    var months = dps_row["data"];
                                    $(Object.keys(months)).each(function (index, key) {
                                        var months_row = months[key];
                                        if (parseInt(months_row.from) <= month && month <= parseInt(months_row.to)) {
                                            var percent = parseInt(months_row.percent);
                                            var p = percent / 12 / 100,
                                                p1 = Math.pow(1 + p, month),
                                                p2 = Math.pow(1 + p, month),
                                                month_paid = (amount * (p * p1)) / (p2 - 1),
                                                total_paid = month_paid * month,
                                                percent_paid = total_paid - amount;
                                            if (percent_paid > 0) {
                                                result = true;
                                                calc.find(".calc_res_block, .mps_bttns .open_l").show();
                                                calc.find(".calc_no_res").hide();
                                                calc.find(".loan_amount").html(amount);
                                                calc.find(".down_paid").html(parseInt(down_paid).toFixed(0));
                                                calc.find(".month_paid").html(month_paid.toFixed(0));
                                                calc.find(".total_paid").html(total_paid.toFixed(0));
                                            }
                                        }
                                    });
                                } else {
                                }
                            });
                        }
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
        if (!result) {
            calc.find(".calc_res_block, .mps_bttns .open_l").hide();
            calc.find(".calc_no_res").show();
        }
    },
    calculateLoan2: function (calc, data, currency, amount, month) {
        var result = false;
        try {
            var amounts = data[currency]["data"];
            $(Object.keys(amounts)).each(function (index, key) {
                var amounts_row = amounts[key];
                if (parseInt(amounts_row.from) <= amount && amount <= parseInt(amounts_row.to)) {
                    var months = amounts_row["data"];
                    $(Object.keys(months)).each(function (index, key) {
                        var months_row = months[key];
                        if (parseInt(months_row.from) <= month && month <= parseInt(months_row.to)) {
                            var percent = parseInt(months_row.percent);
                            var p = percent / 12 / 100,
                                p1 = Math.pow(1 + p, month),
                                p2 = Math.pow(1 + p, month),
                                month_paid = (amount * (p * p1)) / (p2 - 1),
                                total_paid = month_paid * month,
                                percent_paid = total_paid - amount;
                            if (percent_paid > 0) {
                                result = true;
                                calc.find(".calc_res_block, .mps_bttns .open_c").show();
                                calc.find(".calc_no_res").hide();
                                calc.find(".month_paid").html(month_paid.toFixed(0));
                                calc.find(".total_paid").html(total_paid.toFixed(0));
                                calc.find(".percent_paid").html(percent_paid.toFixed(0));
                            }
                        }
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
        if (!result) {
            calc.find(".calc_res_block, .mps_bttns .open_c").hide();
            calc.find(".calc_no_res").show();
        }
    },
    init: function () {
        $(".calc.other").each(function () {
            var calc = $(this);
            calc.find(".slider_wrap").each(function () {
                var t = $(this),
                    tMin = parseInt(t.attr("data-min")),
                    tMax = parseInt(t.attr("data-max")),
                    tStep = parseInt(t.attr("data-step")),
                    tV = parseInt(t.attr("data-value"));
                t.find(".slider_self").slider({
                    range: "min",
                    min: tMin,
                    max: tMax,
                    value: tV,
                    step: tStep,
                    slide: function (event, ui) {
                        var currency = calc.find(".select_currency a.active").data("val"),
                            amount = calc.find(".calc_amount input").val(),
                            month = calc.find(".calc_month input").val();
                        if (t.hasClass("calc_amount_slider")) {
                            amount = ui.value;
                        }
                        if (t.hasClass("calc_month_slider")) {
                            month = ui.value;
                        }
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span input").val(ui.value);
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span span").html(ui.value);
                    },
                });
            });
        });
        $(".calc.loan").each(function () {
            var calc = $(this),
                json = calc.data("json");
            var currency = calc.find(".select_currency a.active").data("val"),
                amount = calc.find(".calc_amount input").val(),
                month = calc.find(".calc_month input").val();
            //Calculator.calculateLoan2(calc, json, currency, amount, month);
            calc.find(".slider_wrap").each(function () {
                var t = $(this),
                    tMin = parseInt(t.attr("data-min")),
                    tMax = parseInt(t.attr("data-max")),
                    tStep = parseInt(t.attr("data-step")),
                    tV = parseInt(t.attr("data-value"));
                t.find(".slider_self").slider({
                    range: "min",
                    min: tMin,
                    max: tMax,
                    value: tV,
                    step: tStep,
                    slide: function (event, ui) {
                        var currency = calc.find(".select_currency a.active").data("val"),
                            amount = calc.find(".calc_amount input").val(),
                            month = calc.find(".calc_month input").val();
                        if (t.hasClass("calc_amount_slider")) {
                            amount = ui.value;
                        }
                        if (t.hasClass("calc_month_slider")) {
                            month = ui.value;
                        }
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span input").val(ui.value);
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span span").html(ui.value);
                        Calculator.calculateLoan2(calc, json, currency, amount, month);
                    },
                });
            });
        });
        $(".calc.leasing").each(function () {
            var calc = $(this),
                json = calc.data("json");
            var currency = calc.find(".select_currency a.active").data("val"),
                amount = calc.find(".calc_amount input").val(),
                engine = calc.find(".calc_engine input").val(),
                dp = calc.find(".calc_dp input").val().replace("%", ""),
                month = calc.find(".calc_month input").val();
            Calculator.calculateLeasing(calc, json, currency, amount, engine, dp, month);
            calc.find(".slider_wrap").each(function () {
                var t = $(this),
                    tMin = parseInt(t.attr("data-min")),
                    tMax = parseInt(t.attr("data-max")),
                    tStep = parseInt(t.attr("data-step")),
                    tV = parseInt(t.attr("data-value"));
                t.find(".slider_self").slider({
                    range: "min",
                    min: tMin,
                    max: tMax,
                    value: tV,
                    step: tStep,
                    slide: function (event, ui) {
                        var currency = calc.find(".select_currency a.active").data("val"),
                            amount = calc.find(".calc_amount input").val(),
                            engine = calc.find(".calc_engine input").val(),
                            dp = calc.find(".calc_dp input").val().replace("%", ""),
                            month = calc.find(".calc_month input").val();
                        if (t.hasClass("calc_amount_slider")) {
                            amount = ui.value;
                        }
                        if (t.hasClass("calc_engine_slider")) {
                            engine = ui.value;
                        }
                        if (t.hasClass("calc_dp_slider")) {
                            dp = ui.value;
                        }
                        if (t.hasClass("calc_month_slider")) {
                            month = ui.value;
                        }
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span input").val(ui.value);
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span span").html(ui.value);
                    },
                    stop: function (event, ui) {
                        var currency = calc.find(".select_currency a.active").data("val"),
                            amount = calc.find(".calc_amount input").val(),
                            engine = calc.find(".calc_engine input").val(),
                            dp = calc.find(".calc_dp input").val().replace("%", ""),
                            month = calc.find(".calc_month input").val();
                        if (t.hasClass("calc_amount_slider")) {
                            amount = ui.value;
                        }
                        if (t.hasClass("calc_engine_slider")) {
                            engine = ui.value;
                        }
                        if (t.hasClass("calc_dp_slider")) {
                            dp = ui.value;
                        }
                        if (t.hasClass("calc_month_slider")) {
                            month = ui.value;
                        }
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span input").val(ui.value);
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span span").html(ui.value);
                        Calculator.calculateLeasing(calc, json, currency, amount, engine, dp, month);
                    },
                });
            });
        });
        $(".calc")
            .not(".leasing, .loan, .other")
            .each(function () {
                var self = $(this),
                    curr = getCookie("curr");
                var amount = parseInt(getCookie("amount")),
                    month = parseInt(getCookie("month")),
                    max_amount = parseInt($(this).find(".calc_amount_slider").attr("data-max")),
                    max_month = parseInt($(this).find(".calc_month_slider").attr("data-max"));
                if (curr === "usd" && self.find(".select_currency a[data-val='" + curr + "']").length) {
                    max_amount = 300000;
                    max_month = 60;
                    self.find(".plso u").text(curr.toUpperCase());
                    self.siblings(".open_order ").find(".plso u").text(curr.toUpperCase());
                }
                if (amount) {
                    if (amount > max_amount) amount = max_amount;
                    $(this).find(".calc_amount input").val(amount);
                    $(this).find(".calc_amount_slider").attr("data-value", amount).attr("data-max", max_amount);
                }
                if (month) {
                    if (month > max_month) month = max_month;
                    $(this).find(".calc_month input").val(month);
                    $(this).find(".calc_month_slider").attr("data-value", month).attr("data-max", max_month);
                }
                if (curr) {
                    $(this).find(".select_currency a").removeClass("active");
                    var obj = $(this).find(".select_currency a[data-val='" + curr + "']");
                    if (obj) obj.addClass("active");
                }
                $(".slider_self").change();
                Calculator.calculate($(this).find(".calc_amount input").val(), $(this).find(".calc_month input").val(), $(this).find(".select_currency a.active").text(), $(this).data("id"), function (a, b, c) {
                    self.find(".total").text(a);
                    self.find(".total_paid").text(b);
                    self.find(".percent").text(c);
                });
            });
        $(".int").keyup(function () {
            this.value = this.value.replace(/[^0-9\.]/g, "");
        });
        $(".calc")
            .not(".leasing, .loan, .other")
            .find(".slider_wrap")
            .each(function () {
                var t = $(this),
                    tMin = parseInt(t.attr("data-min")),
                    tMax = parseInt(t.attr("data-max")),
                    tRange = t.attr("data-range"),
                    tStep = parseInt(t.attr("data-step")),
                    tV = parseInt(t.attr("data-value"));
                if (tStep) {
                    tStep = tStep;
                } else {
                    tStep = 1;
                }
                t.find(".slider_self").slider({
                    range: "min",
                    min: tMin,
                    max: tMax,
                    value: tV,
                    step: tStep,
                    slide: function (event, ui) {
                        var currCalc = $(event.target).parents().eq(3);
                        var amountInput = currCalc.find(".calc_amount input");
                        var currMonth = currCalc.find(".calc_month input");
                        var currMonthSpan = currCalc.find(".calc_month span");
                        var curr = currCalc.find(".select_currency a.active").text();
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span input").val(ui.value);
                        $(ui.handle).closest(".slider_wrap").siblings("b").find("span span").html(ui.value);
                        setCookie("amount", amountInput.val(), 1);
                        setCookie("month", currMonth.val(), 1);
                        setCookie("curr", curr.toLowerCase(), 1);
                        if ($(".calc_inner_bttn").length > 0) {
                            Calculator.calculate(amountInput.val(), currMonth.val(), curr, currCalc.data("id"), function (a, b, c) {
                                $(".total").text(a);
                                $(".total_paid").text(b);
                                $(".percent").text(c);
                            });
                        } else {
                            Calculator.calculate(amountInput.val(), currMonth.val(), curr, currCalc.data("id"));
                        }
                    },
                });
            });
        $(document).on("keyup", ".changeable_input", function (e) {
            var t = $(this);
            tM = parseInt(t.attr("data-max"));
            tMin = parseInt(t.attr("data-min"));
            tV = t.val();
            tS = t.closest(".calc");
            if (tS.hasClass("leasing") || tS.hasClass("loan") || tS.hasClass("other")) return;
            if (tV > tM) {
                t.val(tM);
            }
            if (tV < tMin) {
                t.val(tMin);
            }
            nV = t.val();
            t.closest(".cl_item_s").find(".slider_self").slider("value", nV);
            var currCalc = tS;
            var amountInput = currCalc.find(".calc_amount input");
            var currMonth = currCalc.find(".calc_month input");
            var currMonthSpan = currCalc.find(".calc_month span");
            var curr = currCalc.find(".select_currency a.active").text();
            if ($(".calc_inner_bttn").length > 0) {
                Calculator.calculate(amountInput.val(), currMonth.val(), curr, currCalc.data("id"), function (a, b, c) {
                    $(".total").text(a);
                    $(".total_paid").text(b);
                    $(".percent").text(c);
                });
            } else {
                Calculator.calculate(amountInput.val(), currMonth.val(), curr, currCalc.data("id"));
            }
        });
    },
    reset: function () {
        setCookie("amount", 0, 1);
        setCookie("month", 0, 1);
        setCookie("curr", "", 1);
    },
    calculate: function (a, m, curr, id, cb) {
        var loanAmount = a;
        var loanMonth = m;
        curr = curr.toLowerCase();
        console.log("test" + id);
        if (id === undefined || id === "") return false;
        var currObj = calcs[id][curr];
        for (var prop in currObj) {
            var amountArr = prop.split("-");
            if (Number(loanAmount) >= Number(amountArr[0]) && Number(loanAmount) <= Number(amountArr[1])) {
                for (var p in currObj[prop]) {
                    var i = p.split("-");
                    if (Number(loanMonth) >= Number(i[0]) && Number(loanMonth) <= Number(i[1])) {
                        Calculator.calculateLoan(loanAmount, loanMonth, Number(currObj[prop][p]), id, cb);
                    }
                }
            }
        }
    },
    calculateLoan: function (amount, period, percent, id, cb) {
        var p = Number(percent) / 12 / 100;
        var p1 = Math.pow(1 + Number(p), Number(period));
        var p2 = Math.pow(1 + p, period);
        var monthAmount = (Number(amount) * (p * p1)) / (p2 - 1);
        if (isNaN(monthAmount)) {
            $(".section.active .calc_no_res, .page-inner .calc_no_res").show();
            $(".section.active .calc_res_block, .page-inner .calc_res_block").hide();
            return;
        } else {
            $(".section.active .calc_no_res, .page-inner .calc_no_res").hide();
            $(".section.active .calc_res_block, .page-inner .calc_res_block").show();
        }
        var fullAmount = monthAmount * period;
        var arrMonthAmount = parseInt(monthAmount);
        var arrfullAmount = parseInt(fullAmount);
        var perc = arrfullAmount - amount;
        if (!cb) {
            var calc = $('.calc[data-id="' + id + '"]');
            calc.find(".total").text(arrfullAmount.formatMoney(0, " ", " "));
            calc.find(".total_paid").text(arrMonthAmount.formatMoney(0, " ", " "));
            calc.find(".percent").text(perc.formatMoney(0, " ", " "));
        } else if ($(".page-inner").length > 0) {
            $(".total").text(arrfullAmount.formatMoney(0, " ", " "));
            $(".total_paid").text(arrMonthAmount.formatMoney(0, " ", " "));
            $(".percent").text(perc.formatMoney(0, " ", " "));
        } else {
            cb(arrfullAmount, arrMonthAmount, perc);
        }
    },
};
Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN((c = Math.abs(c))) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return (
        s +
        (j ? i.substr(0, j) + t : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
        (c
            ? d +
              Math.abs(n - i)
                  .toFixed(c)
                  .slice(2)
            : "")
    );
};
var GMap = {
    markers: [],
    init: function () {
        $(".bls_self a, .bottom_brach_list a").removeClass("active");
        if ($("#map").length > 0) {
            $("#map").removeAttr("style").html("");
            GMap.create(40.3738505, 49.8355496);
        }
    },
    create: function (lat, lng) {
        GMap.markers = [];
        var myOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: false,
            zoomControl: show_map_zoom,
            zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER },
            mapTypeControl: false,
            streetViewControl: true,
            overviewMapControl: true,
            fullscreenControl: false,
            styles: [
                { featureType: "all", elementType: "geometry", stylers: [{ color: "#1b8862" }] },
                { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
                { featureType: "all", elementType: "labels.text.stroke", stylers: [{ saturation: -31 }, { lightness: -33 }, { weight: 2 }, { gamma: 0.8 }, { visibility: "off" }] },
                { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "on" }] },
                { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#3abbeb" }] },
                { featureType: "poi", elementType: "geometry", stylers: [{ saturation: 20 }] },
                { featureType: "poi.park", elementType: "geometry", stylers: [{ lightness: 20 }, { saturation: -20 }] },
                { featureType: "road", elementType: "geometry", stylers: [{ lightness: 10 }, { saturation: -30 }] },
                { featureType: "road", elementType: "geometry.stroke", stylers: [{ saturation: 25 }, { lightness: 25 }] },
                { featureType: "water", elementType: "all", stylers: [{ lightness: -20 }] },
            ],
        };
        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var mapMobile = new google.maps.Map(document.getElementById("map_mobile"), myOptions);
        GMap.setMarkers(map, locations);
        GMap.setMarkers(mapMobile, locations);
    },
    setMarkers: function (map, locations) {
        var marker, i;
        var infowindow = new google.maps.InfoWindow();
        for (i = 0; i < locations.length; i++) {
            var name = locations[i][0];
            var lat = locations[i][1];
            var long = locations[i][2];
            var add = locations[i][3];
            var phone = locations[i][4];
            var email = locations[i][5];
            latlngset = new google.maps.LatLng(lat, long);
            var marker = new google.maps.Marker({ map: map, title: name, position: latlngset, icon: $("#map").data("pin") });
            GMap.markers.push(marker);
            var content = "<div class='inf_block'><div class='m_content'><a href='javascript:void(0)' class='close_info_block'></a><b>" + name + "</b><span>" + add + "</span><span>" + phone + "</span><span>" + email + "</span></div></div>";
            google.maps.event.addListener(
                marker,
                "click",
                (function (marker, content, infowindow) {
                    return function () {
                        for (var i = 0; i < GMap.markers.length; i++) {
                            GMap.markers[i].setIcon($("#map").data("pin"));
                        }
                        this.setIcon($("#map").data("pin"));
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                        $(".gm-style .gm-style-iw").prev().remove();
                        $(".gm-style .gm-style-iw").parent().css("margin", "20px 10px");
                        var latLng = marker.getPosition();
                        lat = marker.getPosition().lat();
                        long = marker.getPosition().lng();
                        (nLl = new google.maps.LatLng(lat, long - 0.0035)), map.setCenter(nLl);
                        map.setZoom(16);
                    };
                })(marker, content, infowindow)
            );
        }
        $(document).on("click", ".close_info_block", function (e) {
            infowindow.close();
            for (var i = 0; i < GMap.markers.length; i++) {
                GMap.markers[i].setIcon($("#map").data("pin"));
            }
        });
    },
};
$(document).on("click", ".active_lang", function (e) {
    if ($(this).hasClass("active")) {
        $(".active_lang").removeClass("active");
        $(".all_langs").hide();
    } else {
        $(".active_lang").addClass("active");
        $(".all_langs").show();
    }
});
$(document).on("click", ".fix_opener", function (e) {
    $("body").addClass("open_fix_step");
    $(".bar_bg").fadeIn();
    setTimeout(function () {
        $(".fix_self").fadeIn();
    }, 400);
});
$(document).on("click", ".bar_bg", function (e) {
    $(".fix_self").fadeOut();
    $(".bar_bg").fadeOut();
    setTimeout(function () {
        $("body").removeClass("open_fix_step");
    }, 400);
});
$(document).on("click", ".web_it .all_langs a", function (e) {
    $(".active_lang").removeClass("active");
    $(".all_langs").hide();
    $(".active_lang").text($(this).text());
});
$(document).on("click", 'a.logo', function (e) {
    $(".content_side").animate({
        right: "34px"
    }, 500, function () {
        $(".content_side").css("left", "unset");
    });
});
$(document).on("click", '.main_navigator a:not(".deactive")', function (e) {
    var t = $(this),
        url = t.attr("href"),
        title = t.html();
    window.history.pushState({ url: url }, "", url);
    document.title = title;
    tCi = t.closest("li").index();
    if ($(".web_it").length > 0) e.preventDefault();
    $(".mps_scroller_self").css("top", -tCi * 100 + "vh");
    $(".mps_item").removeClass("active");
    $(".mps_item").eq(tCi).addClass("active");
    $(".mp_video_bg").fadeOut();
    console.log(tCi)
    if (tCi == 2) {
        $(".content_side").animate({
            right: "34px"
        }, 500, function () {
            $(".content_side").css("left", "unset");
        });
    } else if (tCi == 4) {
        $(".content_side").animate({
            right: "34px"
        }, 500, function () {
            $(".content_side").css("left", "unset");
        });
    } else {
        $(".content_side").animate({
            left: "34px"
        }, 500, function () {
            $(".content_side").css("right", "unset");
        });
    }

    setTimeout(function () {
        $(".mps_item.active .mp_video_bg").fadeIn();
    }, 800);
    if (tCi == 4) {
        $("body").addClass("show_blist");
    } else {
        $("body").removeClass("show_blist");
    }
    $(".main_navigator li").removeClass("active");
    t.closest("li").addClass("active");
    $(".top_bar, .bottom_bar").removeClass("black");
});
$(document).on("click", ".switch a", function () {
    if ($(this).hasClass("active")) return false;
    var prev = $(".switch a.active").data("id");
    var prevCont = $("#" + prev);
    $(".switch a").not($(this)).removeClass("active");
    $(this).addClass("active");
    var next = $(this).data("id");
    var nextCont = $("#" + next);
    prevCont.fadeOut(150, function () {
        nextCont.fadeIn(150);
    });
});
$(document).on("click", '.tabs_nav a:not(".deactive")', function (e) {
    var t = $(this);
    tCi = t.closest("li").index();
    tSelf = t.closest(".tabs_nav").siblings(".tabs_self");
    activeTab = tSelf.find(".tab_item.active");
    t.parents(".mps_item").find(".one_bg_slider .mp_image_bg").removeClass("show_me").eq(tCi).addClass("show_me");
    t.closest(".tabs_nav").find("a").removeClass("active").addClass("deactive");
    t.addClass("active");
    activeTab.fadeOut(function () {
        activeTab.removeClass("active");
        tSelf
            .find(".tab_item")
            .eq(tCi)
            .fadeIn(function () {
                tSelf.find(".tab_item").eq(tCi).addClass("active");
                $(".tabs_nav a").removeClass("deactive");
            });
    });
});
$(document).on("click", ".select_currency a:not(.active)", function () {
    $(this).closest(".select_currency").find("a").removeClass("active");
    $(this).addClass("active");
    if ($(this).parents(".inner_calc").length) {
        var _this_index = $(this).parent().index();
        $(".switch a").eq(_this_index).click();
    }
    var curr = $(this).text().toLowerCase();
    var calcEl = $(this).closest(".calc");
    var amountInput = calcEl.find(".calc_amount input");
    var monthInput = calcEl.find(".calc_month input");
    if (calcEl.hasClass("loan")) {
        var data = calcEl.data("json")[curr],
            defData = calcEl.data("default")[curr];
        var amount = parseInt(amountInput.val());
        var month = parseInt(monthInput.val());
        var defAmount = parseInt(defData.amount.value);
        var defMonth = parseInt(defData.month.value);
        var minAmount = parseInt(defData.amount.min);
        var maxAmount = parseInt(defData.amount.max);
        var minMonth = parseInt(defData.month.min);
        var maxMonth = parseInt(defData.month.max);
        if (amount < minAmount) {
            amount = minAmount;
            amountInput.val(minAmount);
        }
        if (amount > maxAmount) {
            amount = maxAmount;
            amountInput.val(maxAmount);
        }
        if (month < minMonth) {
            month = minMonth;
            monthInput.val(minMonth);
        }
        if (month > maxMonth) {
            month = maxMonth;
            monthInput.val(maxMonth);
        }
        calcEl.find(".clf_s1 .slider_self").slider("option", "min", Number(minAmount));
        calcEl.find(".clf_s1 .slider_self").slider("option", "max", Number(maxAmount));
        calcEl.find(".clf_s1 .slider_self").slider("option", "value", amountInput.val());
        calcEl.find(".clf_s2 .slider_self").slider("option", "min", Number(minMonth));
        calcEl.find(".clf_s2 .slider_self").slider("option", "value", monthInput.val());
        calcEl.find(".clf_s2 .slider_self").slider("option", "max", Number(maxMonth));
        Calculator.calculateLoan2(calcEl, calcEl.data("json"), curr, amount, month);
        calcEl.find(".plso u").text(curr.toUpperCase());
        return;
    }
    var calc_obj = calcs[calcEl.data("id")];
    var obj = calc_obj && Object.keys(calc_obj).indexOf(curr) > -1 ? calc_obj[curr] : null;
    if (!obj) return;
    setCookie("curr", curr.toLowerCase(), 1);
    var amountArr = Object.keys(obj)
        .filter(function (curr, index, arr) {
            return index == 0 || index == arr.length - 1;
        })
        .map(function (curr, index, arr) {
            var item;
            if (index == 0) {
                item = curr.split("-")[0];
            } else if (index == arr.length - 1) {
                item = curr.split("-")[1];
            }
            return item;
        });
    var monthArr = Object.keys(Object.values(obj)[0])
        .filter(function (curr, index, arr) {
            return index == 0 || index == arr.length - 1;
        })
        .map(function (curr, index, arr) {
            var item;
            if (index == 0) {
                item = curr.split("-")[0];
            } else if (index == arr.length - 1) {
                item = curr.split("-")[1];
            }
            return item;
        });
    var amount = amountInput.val();
    var month = monthInput.val();
    var minAmount = amountArr[0];
    var maxAmount = amountArr[1];
    var minMonth = monthArr[0];
    var maxMonth = monthArr[1];
    if (amount > maxAmount) amountInput.val(maxAmount);
    if (month > maxMonth) monthInput.val(maxMonth);
    calcEl.find(".clf_s1 .slider_self").slider("option", "min", Number(minAmount));
    calcEl.find(".clf_s1 .slider_self").slider("option", "max", Number(maxAmount));
    calcEl.find(".clf_s1 .slider_self").slider("option", "value", amountInput.val());
    calcEl.find(".clf_s2 .slider_self").slider("option", "min", Number(minMonth));
    calcEl.find(".clf_s2 .slider_self").slider("option", "value", monthInput.val());
    calcEl.find(".clf_s2 .slider_self").slider("option", "max", Number(maxMonth));
    calcEl.find(".plso u").text(curr.toUpperCase());
    $(".calc_inner_bttn .plso u").text(curr.toUpperCase());
    Calculator.calculate(amountInput.val(), monthInput.val(), curr, calcEl.data("id"));
});
$(document).on("click", ".web_it .ajax-link", function (e) {
    e.preventDefault();
    console.log("checkkkk");
    
    var t = $(this),
        url = t.attr("href"),
        lang = t.attr("data-lang");
    Page.load(url, true, lang);
});
$(document).on("click", ".calc_inner_bttn.open_order, .open_c", function (e) {
    var t = $(this);
    $(".fader").fadeIn(function () {
        if ($(".web_it").length > 0) {
        } else {
            $(".main_wrp").hide();
        }
    });
    $("body").addClass("open_order");
});
$(document).on("click", ".calc_inner_bttn.open_leasing, .open_l", function (e) {
    var t = $(this);
    $(".fader").fadeIn(function () {
        if ($(".web_it").length > 0) {
        } else {
            $(".main_wrp").hide();
        }
    });
    $("body").addClass("open_leasing_form");
});
$(document).on("click", ".open_career", function () {
    var t = $(this);
    $(".fader").fadeIn(function () {
        if ($(".web_it").length > 0) {
        } else {
            $(".main_wrp").hide();
        }
    });
    $(".career_form form > p").html($(".content_side .page_title > h2").html());
    $('.career_form form input[name="vacancy"]').val($(".content_side .page_title > h2").data("id"));
    $("body").addClass("open_career_form");
});
$(document).on("click", ".close_order, .fader", function (e) {
    var t = $(this);
    $(".main_wrp").show();
    $(".fader").fadeOut();
    $("body").removeClass("open_order open_leasing_form");
    $("body").removeClass("open_career_form");
});
$(document).on("click", "form button", function () {
    var btn = $(this);
    btn.addClass("preloader");
});
$(document).on("submit", "form", function (e) {
    e.preventDefault();
    var form = $(this),
        type = form.attr("data-form"),
        data = new FormData(this);
    data.append("action", type);
    if (type === "order") {
        var loan = $(".tab_item.active .calc.loan");
        if (loan) {
            data.append("loan", loan.data("id"));
        }
    }
    if (type === "order" || type === "leasing") {
        var amount = $(".calc_amount input").val(),
            currency = $(".select_currency a.active").length ? $(".select_currency a.active").html().toLowerCase() : "",
            month = $(".calc_month input").val();
        data.append("amount", amount);
        data.append("currency", currency);
        data.append("month", month);
    }
    $.ajax({
        url: form.attr("action"),
        type: form.attr("method"),
        data: data,
        dataType: "json",
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {
            form.find("input").attr("disabled", "disabled");
            form.find(".error").removeClass("error");
        },
        success: function (data) {
            if (Object.keys(data.errors).length) {
                Object.keys(data.errors).map(function (field) {
                    var input = form.find('[name="' + field + '"]'),
                        type = input.attr("type");
                    if (type === "checkbox") {
                        input.closest(".cb-block").addClass("error");
                    } else {
                        input.closest(".f_line").addClass("error");
                    }
                    if (input.is("textarea")) {
                        input.closest(".f_line").removeClass("error");
                    }
                });
                form.find("button.preloader").removeClass("preloader");
                form.find("input").removeAttr("disabled");
            } else if (data.success) {
                form[0].reset();
                var obj = form.closest(".comp_form");
                if (type === "order" || type === "leasing" || type === "career") {
                    obj = form;
                }
                obj.hide()
                    .siblings(".success_form")
                    .fadeIn(150, function () {
                        $(this).find(".check_from").addClass("go");
                        setTimeout(function () {
                            $(".fader").fadeOut(150, function () {
                                $(".success_form").hide();
                                obj.show();
                            });
                        }, 3000);
                    });
                form.find("button.preloader").removeClass("preloader");
                form.find("input").removeAttr("disabled");
            } else if (data.reload) {
                window.location = "";
            } else if (data.redirect) {
                window.location = data.redirect;
            }
        },
    });
    return false;
});
$(document).on("click", ".file-input b", function (e) {
    e.preventDefault();
    $(this).parent().find(".hidden-fileinput").trigger("click");
    return false;
});
$(document).on("change", "#leasing-form .hidden-fileinput", function (e) {
    if ($(this)[0].files.length) {
    } else {
    }
    $(".uploaded_files").text("");
    for (var i = 0; i < $(this)[0].files.length; i++) {
        $(".uploaded_files").append("<span>" + $(".hidden-fileinput")[0].files[i]["name"] + "</span>");
    }
});
$(document).on("change", "#career-form .hidden-fileinput", function (e) {
    if ($(this)[0].files.length) {
        $(this).parent().find(".t").text($(this).val().slice(12));
    } else {
        $(this).parent().find(".t").text($(this).parent().find(".t").data("word"));
    }
});
$(document).on("click", "a.show_text", function (e) {
    var _this = $(this),
        _text_height = _this.prev().find("> div").height() + 10,
        _text_min_height = 240;
    if (_this.hasClass("active")) {
        _this.prev().css("height", _text_min_height + "px");
    } else {
        _this.prev().css("height", _text_height + "px");
    }
    _this.toggleClass("active");
    return false;
});
$(document).on("click", "a.online_consultant", function (e) {
    $(".siq_bR, .bar_bg").click();
});
$(document).on("click", ".bls_self a, .bottom_brach_list a", function (e) {
    var i = parseInt($(this).attr("data-id"));
    google.maps.event.trigger(GMap.markers[i], "click");
    $(".bls_self a, .bottom_brach_list a").removeClass("active");
    $(this).addClass("active");
});
$(document).on("click", ".team_more", function () {
    var summary = $(this).closest(".team_summary");
    summary.hide();
    summary.siblings(".team_body").show();
    return false;
});
$(document).on("change", ".calc.loan .changeable_input", function (e) {
    var t = $(this),
        slider = t.closest(".cl_item_s").find(".slider_wrap"),
        max = parseInt(slider.attr("data-max")),
        min = parseInt(slider.attr("data-min")),
        val = t.val(),
        calc = t.closest(".calc"),
        json = calc.data("json");
    if (val < min) {
        val = min;
        t.val(min);
    }
    if (val > max) {
        val = max;
        t.val(max);
    }
    slider.find(".slider_self").slider("option", "value", val);
    var currency = calc.find(".select_currency a.active").data("val"),
        amount = calc.find(".calc_amount input").val(),
        month = calc.find(".calc_month input").val();
    Calculator.calculateLoan2(calc, json, currency, amount, month);
});
$(document).on("keyup", ".calc.loan .changeable_input", function (e) {
    var t = $(this),
        slider = t.closest(".cl_item_s").find(".slider_wrap"),
        max = parseInt(slider.attr("data-max")),
        min = parseInt(slider.attr("data-min")),
        val = t.val(),
        calc = t.closest(".calc"),
        json = calc.data("json");
    if (val < min) {
        val = min;
        t.val(min);
    }
    if (val > max) {
        val = max;
        t.val(max);
    }
    slider.find(".slider_self").slider("option", "value", val);
    var currency = calc.find(".select_currency a.active").data("val"),
        amount = calc.find(".calc_amount input").val(),
        month = calc.find(".calc_month input").val();
    Calculator.calculateLoan2(calc, json, currency, amount, month);
});
$(document).on("change", ".calc.leasing .changeable_input", function (e) {
    var t = $(this),
        slider = t.closest(".cl_item_s").find(".slider_wrap"),
        max = parseInt(slider.attr("data-max")),
        min = parseInt(slider.attr("data-min")),
        val = t.val(),
        calc = t.closest(".calc"),
        json = calc.data("json");
    if (val < min) {
        val = min;
        t.val(min);
    }
    if (val > max) {
        val = max;
        t.val(max);
    }
    slider.find(".slider_self").slider("option", "value", val);
    var currency = calc.find(".select_currency a.active").data("val"),
        amount = calc.find(".calc_amount input").val(),
        engine = calc.find(".calc_engine input").val(),
        dp = calc.find(".calc_dp input").val().replace("%", ""),
        month = calc.find(".calc_month input").val();
    Calculator.calculateLeasing(calc, json, currency, amount, engine, dp, month);
});
$(document).on("keyup", ".calc.leasing .changeable_input", function (e) {
    var t = $(this),
        slider = t.closest(".cl_item_s").find(".slider_wrap"),
        max = parseInt(slider.attr("data-max")),
        min = parseInt(slider.attr("data-min")),
        val = t.val(),
        calc = t.closest(".calc"),
        json = calc.data("json");
    if (val < min) {
        val = min;
        t.val(min);
    }
    if (val > max) {
        val = max;
        t.val(max);
    }
    slider.find(".slider_self").slider("option", "value", val);
    var currency = calc.find(".select_currency a.active").data("val"),
        amount = calc.find(".calc_amount input").val(),
        engine = calc.find(".calc_engine input").val(),
        dp = calc.find(".calc_dp input").val().replace("%", ""),
        month = calc.find(".calc_month input").val();
    Calculator.calculateLeasing(calc, json, currency, amount, engine, dp, month);
});
$(document).on("change", ".calc.other .changeable_input", function (e) {
    var t = $(this),
        slider = t.closest(".cl_item_s").find(".slider_wrap"),
        max = parseInt(slider.attr("data-max")),
        min = parseInt(slider.attr("data-min")),
        val = t.val();
    if (val < min) {
        val = min;
        t.val(min);
    }
    if (val > max) {
        val = max;
        t.val(max);
    }
    slider.find(".slider_self").slider("option", "value", val);
});

$(document).on("keyup", ".calc.other .changeable_input", function (e) {
    var t = $(this),
        slider = t.closest(".cl_item_s").find(".slider_wrap"),
        max = parseInt(slider.attr("data-max")),
        min = parseInt(slider.attr("data-min")),
        val = t.val();
    if (val < min) {
        val = min;
        t.val(min);
    }
    if (val > max) {
        val = max;
        t.val(max);
    }
    slider.find(".slider_self").slider("option", "value", val);
});
$(document).ready(function () {});
