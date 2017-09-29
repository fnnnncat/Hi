'use strict';

module.exports = app => {
	return class AppInfo extends app.Service {
		* find(id) {
			const appinfo = yield this.ctx.model.Cabrdlyc.findById(id);
			if (!appinfo) {
				this.ctx.throw(404, 'app not found');
			}
			return Cabrdlycinfo;
		}

	};
};