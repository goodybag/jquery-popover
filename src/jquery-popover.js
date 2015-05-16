;(function ( $, window, document, undefined ) {
  'use strict';

  var old = $.fn.popover;

  var Popover = function(el, options) {
    this.$el = $(el);
    this.options  = this.getOptions(options);
    this.$wrapper = this.$el.parents('.popover-wrapper').eq(0);
    this.$body    = this.$wrapper.find('.popover-body');
    this.listenEvents();
    return this;
  };

  Popover.DEFAULTS = {
    trigger: 'click' // click | hover
  };

  Popover.prototype.getDefaults = function() {
    return Popover.DEFAULTS;
  };

  Popover.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$el.data(), options);
    return options;
  };

  Popover.prototype.listenEvents = function (options) {
    var this_ = this;
    var $el = this.$el;

    // click outside to close modal
    $(document).click(function(e) {
      if ( !this.$wrapper.hasClass('open') ){
        return;
      }

      var shouldClose = (
        !$.contains( this.$wrapper[0], e.target )
        && this.$wrapper[0] !== e.target
      )

      if ( shouldClose ) {
        this.close();
      }
    }.bind(this));

    // click, hover, or focus based triggers
    var trigger = this.options.trigger;
    if ( trigger === 'click' ) {
      $el.on('click', function(e) {
        e.preventDefault();
        this_.toggle();
      });
    } else if ( trigger === 'hover' ) {
      $el.on('mouseenter', function(e) {
        e.preventDefault();
        this_.open();
      });
      $el.on('mouseleave', function(e) {
        e.preventDefault();
        this_.close();
      });
      $el.on('click', function(e) {
        e.preventDefault();
        this_.toggle();
      });
    } else if ( trigger === 'focus' ) {

    }

    // Listen to close buttons
    this.$wrapper.find('[data-toggle-role="close"]').on('click', function(e) {
      e.preventDefault();
      this_.close();
    });

    return this;
  };

  Popover.prototype.open = function() {
    if (this.$wrapper) this.$wrapper.addClass('open');
    return this;
  };

  Popover.prototype.close = function() {
    if (this.$wrapper) this.$wrapper.removeClass('open');
    return this;
  };

  Popover.prototype.toggle = function() {
    if (this.$wrapper) this.$wrapper.toggleClass('open');
    return this;
  };

  // PLUGIN DEFINITION
  var Plugin = function( options ){
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('gb.popover');

      if (!data) {
        data = new Popover(this, options);
        $this.data('gb.popover', data);
      }
    });
  };

  $.fn.popover             = Plugin;
  $.fn.popover.Constructor = Popover;

  // NO CONFLICT
  $.fn.popover.noConflict = function() {
    $.fn.popover = old;
    return this;
  };
})( jQuery, window, document );
