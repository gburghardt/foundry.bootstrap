WelcomeModule = Module.Base.extend({
	prototype: {
		options: {
			backgroundColor: "#f0f0f0"
		},

		_ready: function _ready() {
			Module.Base.prototype._ready.call(this);

			var model = new Welcome({
				title: "Welcome to Foundry!",
				body: [
					'<p>To get you started, this example module was created in <code>app/modules/welcome_module.js</code>.</p>',
					'<p>You can change the background color of this module by adding a <code>data-module-options</code> attribute to this module\'s root element.</p>'
				].join("")
			});

			this.element.style.backgroundColor = this.options.backgroundColor;
			this.render("welcome/index", model, this.element);
		}
	}
});
