$(document).ready(function(){

    // 画面をフェードイン
    $('body').fadeIn(500); // フェードインの速さ（ミリ秒）

    // 画像をカルーセルに変更
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
    });

    // リンクをホバー時に透明度変更
    $(function() {
        $('#profile').hover(function(){
            $('#profile').css('opacity', '0.5');
        },
        function(){
            $('#profile').css('opacity', '1.0');
        });

         $('#about').hover(function(){
            $('#about').css('opacity', '0.5');
        },
        function(){
            $('#about').css('opacity', '1.0');
        });

        $('#works').hover(function(){
            $('#works').css('opacity', '0.5');
        },
        function(){
            $('#works').css('opacity', '1.0');
         });

    });

    // TOPボタン配置
    $('#scrollButton').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() >= 100) {
            $('#scrollButton').fadeIn();
        } else {
            $('#scrollButton').fadeOut();
        }
    });

        // ボタンをクリックでTOPにスクロール
    $('#scrollButton').click(function() {

        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // ページ内リンクがクリックされたときの動作
    $("a[href^='#']").on('click', function(event) {
        // リンクのデフォルト動作を無効にする
        event.preventDefault();

        // 移動先の要素の位置を取得
        var target = $($(this).attr("href"));

        if (target.length) {
            // スクロールアニメーションを実行
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 1000); // スクロールにかかる時間（ミリ秒）
        }
    });

     // スクロール時のフェードイン処理
     $(window).scroll(function() {
            // セクションとカルーセルの初期表示
        $('.fade-in-section:first-child').css({
            opacity: 1,
            transform: 'translateY(0)'
        });

        $('.fade-in-section').slice(1).each(function() {
            var section = $(this);
            var position = section.offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            // セクションが画面内に入ったらフェードイン
            if (position < scroll + windowHeight - 100) {
                section.css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
     });
    // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('#works-img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
    return false
  });

});

