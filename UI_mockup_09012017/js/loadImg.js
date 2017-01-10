(function() {
  (function($) {
    return $.fn.imgPreload = function(options) {
      var delay_completion, i, image_stack, placeholder_stack, replace, settings, spinner_stack, src, x, _i, _len;
      settings = {
        fake_delay: 10,
        animation_duration: 1000,
        spinner_src: 'spinner.gif'
      };
      if (options) {
        $.extend(settings, options);
      }
      image_stack = [];
      placeholder_stack = [];
      spinner_stack = [];
      window.delay_completed = false;
      delay_completion = function() {
        var x, _i, _len, _results;
        window.delay_completed = true;
        _results = [];
        for (_i = 0, _len = image_stack.length; _i < _len; _i++) {
          x = image_stack[_i];
          _results.push($(x).attr('data-load-after-delay') === 'true' ? (replace(x), $(x).removeAttr('data-load-after-delay')) : void 0);
        }
        return _results;
      };
      setTimeout(delay_completion, settings.fake_delay);
      this.each(function() {
        var $image, $placeholder, $spinner_img, offset_left, offset_top;
        $image = $(this);
        offset_top = $image.offset().top;
        offset_left = $image.offset().left;
        $spinner_img = $('<img>');
        $placeholder = $('<img>').attr({
          src: 'data:image/gif;base64,R0lGODlhAQABA\
                IABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
        });
        $placeholder.attr({
          width: $image.attr('width')
        });
        $placeholder.attr({
          height: $image.attr('height')
        });
        spinner_stack.push($spinner_img);
        placeholder_stack.push($placeholder);
        image_stack.push($image.replaceWith($placeholder));
        $('body').append($spinner_img);
        $spinner_img.css({
          position: 'absolute'
        });
        $spinner_img.css('z-index', 9999);
        $spinner_img.load(function() {
          $(this).css({
            left: (offset_left + $placeholder.width() / 2) - $(this).width() / 2
          });
          return $(this).css({
            top: (offset_top + $placeholder.height() / 2) - $(this).height() / 2
          });
        });
        return $spinner_img.attr({
          src: settings.spinner_src
        });
      });
      i = 0;
      for (_i = 0, _len = image_stack.length; _i < _len; _i++) {
        x = image_stack[_i];
        x.attr({
          no: i++
        });
        src = x.attr('src');
        x.attr({
          src: ''
        });
        x.load(function() {
          if (window.delay_completed) {
            return replace(this);
          } else {
            return $(this).attr('data-load-after-delay', true);
          }
        });
        x.attr({
          src: src
        });
      }
      replace = function(image) {
        var $image, no_;
        $image = $(image);
        no_ = $image.attr('no');
        placeholder_stack[no_].replaceWith($image);
        spinner_stack[no_].fadeOut(settings.animation_duration / 2, function() {
          return $(this).remove();
        });
        return $image.fadeOut(0).fadeIn(settings.animation_duration);
      };
      return this;
    };
  })(jQuery);
}).call(this);




1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

58

59

60

61

62

63

64

65

66

67

68

69

70

71

72

73

74

75

76

77

78

79

80

81

82

83

84

85

86

87

88

89

90

91

92

93

94

95

96

97

98
 (function() {
  (function($) {
    return $.fn.imgPreload = function(options) {
      var delay_completion, i, image_stack, placeholder_stack, replace, settings, spinner_stack, src, x, _i, _len;
      settings = {
        fake_delay: 10,
        animation_duration: 1000,
        spinner_src: 'spinner.gif'
      };
      if (options) {
        $.extend(settings, options);
      }
      image_stack = [];
      placeholder_stack = [];
      spinner_stack = [];
      window.delay_completed = false;
      delay_completion = function() {
        var x, _i, _len, _results;
        window.delay_completed = true;
        _results = [];
        for (_i = 0, _len = image_stack.length; _i < _len; _i++) {
          x = image_stack[_i];
          _results.push($(x).attr('data-load-after-delay') === 'true' ? (replace(x), $(x).removeAttr('data-load-after-delay')) : void 0);
        }
        return _results;
      };
      setTimeout(delay_completion, settings.fake_delay);
      this.each(function() {
        var $image, $placeholder, $spinner_img, offset_left, offset_top;
        $image = $(this);
        offset_top = $image.offset().top;
        offset_left = $image.offset().left;
        $spinner_img = $('<img>');
        $placeholder = $('<img>').attr({
          src: 'data:image/gif;base64,R0lGODlhAQABA\
                IABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
        });
        $placeholder.attr({
          width: $image.attr('width')
        });
        $placeholder.attr({
          height: $image.attr('height')
        });
        spinner_stack.push($spinner_img);
        placeholder_stack.push($placeholder);
        image_stack.push($image.replaceWith($placeholder));
        $('body').append($spinner_img);
        $spinner_img.css({
          position: 'absolute'
        });
        $spinner_img.css('z-index', 9999);
        $spinner_img.load(function() {
          $(this).css({
            left: (offset_left + $placeholder.width() / 2) - $(this).width() / 2
          });
          return $(this).css({
            top: (offset_top + $placeholder.height() / 2) - $(this).height() / 2
          });
        });
        return $spinner_img.attr({
          src: settings.spinner_src
        });
      });
      i = 0;
      for (_i = 0, _len = image_stack.length; _i < _len; _i++) {
        x = image_stack[_i];
        x.attr({
          no: i++
        });
        src = x.attr('src');
        x.attr({
          src: ''
        });
        x.load(function() {
          if (window.delay_completed) {
            return replace(this);
          } else {
            return $(this).attr('data-load-after-delay', true);
          }
        });
        x.attr({
          src: src
        });
      }
      replace = function(image) {
        var $image, no_;
        $image = $(image);
        no_ = $image.attr('no');
        placeholder_stack[no_].replaceWith($image);
        spinner_stack[no_].fadeOut(settings.animation_duration / 2, function() {
          return $(this).remove();
        });
        return $image.fadeOut(0).fadeIn(settings.animation_duration);
      };
      return this;
    };
  })(jQuery);
}).call(this);
