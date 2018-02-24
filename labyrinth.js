#!/usr/bin/env node

/*
	Both PASSIVE (Terminal) and ACTIVE (Require/Script) modes contain Blocking parts!
	
	accepts : where, censor, pass, leng, mode    (terminal : environmental, script : passed to the single function with that fixed row)
	
	DO NOT INTERRUPT THE PROCESS!!
*/

const fs = require("fs-extra");
require("./nodemodule");

if (require.main === module) {
	
	console.time("time");
	process.on("beforeExit", () => console.timeEnd("time"));
	
	var where = (process.env.where || process.cwd()).replace(/\/$/, "") || "/sdcard/";
	var censor = eval(process.env.censor || "'123456789'.split('')");
	var pass = (process.env.pass || "./").replace(/^\/|\/$/g, "");
	var mode = (process.env.mode || " "); // "override"
	const leng = process.env.leng * 1 || pass.split("/").length - 1 || 2;
	var prog = 0, len = leng;
	
	fs.ensureDirSync(where + "/TEMPSTOR");
	console.info("Initialising... (PLEASE DO NOT INTERRUPT THE PROCESS)");
	fs.readdirSync(where).forEach(fil => {
		if (censor.includes(fil) && mode == "override") {
			fs.removeSync(where + "/" + fil);
			return;
		}
		if (fil != "TEMPSTOR") {
			fs.moveSync(where + "/" + fil, where + "/TEMPSTOR/" + fil, {overwrite: true});
		}
	});
	
	var ls = fill(where, censor);
	while (ls.length && len--) {
		var tmp = [];
		ls.forEach(l => tmp = tmp.concat(fill(l, censor)));
		ls = tmp;
	}
	
	fs.readdirSync(where + "/TEMPSTOR").forEach(fil => {
		if (fs.statSync(where + "/TEMPSTOR/" + fil).isFile()) {
			fs.ensureFileSync(where + "/" + (pass ? pass + "/" : "") + fil);
		} else {
			fs.ensureDirSync(where + "/" + (pass ? pass + "/" : "") + fil);
		}
		fs.moveSync(where + "/TEMPSTOR/" + fil, where + "/" + (pass ? pass + "/" : "") + fil, {overwrite: true});
	});
	console.info(`Files hidden in ${where + "/" + (pass ? pass + "/" : "")}`);
	fs.remove(where + "/TEMPSTOR", nul);
	
	function fill(fold, arr) {
		var whr = arr.map(ar => fold + "/" + ar);
		whr.forEach(wh => fs.ensureDir(wh, nul));
		console.clear();
		console.log(((prog / power(censor.length, leng)) * 100).toFixed(2) + "%");
		prog++;
		return whr;
	}//fill
	
} else {
	module.exports = function(where, censor, pass, leng, mode) {
		
		where = (where || process.cwd()).replace(/\/$/, "") || "/sdcard/";
		censor = eval(censor || "'123456789'.split('')");
		pass = (pass || "./").replace(/^\/|\/$/g, "");
		mode = (mode || " "); // "override"
		leng = leng * 1 || pass.split("/").length - 1 || 2;
		var len = leng;
		
		fs.ensureDirSync(where + "/TEMPSTOR");
		fs.readdirSync(where).forEach(fil => {
			if (censor.includes(fil) && mode == "override") {
				fs.removeSync(where + "/" + fil);
				return;
			}
			if (fil != "TEMPSTOR") {
				fs.moveSync(where + "/" + fil, where + "/TEMPSTOR/" + fil, {overwrite: true});
			}
		});
		
		var ls = fill(where, censor);
		while (ls.length && len--) {
			var tmp = [];
			ls.forEach(l => tmp = tmp.concat(fill(l, censor)));
			ls = tmp;
		}
		
		fs.readdirSync(where + "/TEMPSTOR").forEach(fil => {
			fs.ensureFileSync(where + "/" + (pass ? pass + "/" : "") + fil);
			fs.moveSync(where + "/TEMPSTOR/" + fil, where + "/" + (pass ? pass + "/" : "") + fil, {overwrite: true});
		});
		fs.remove(where + "/TEMPSTOR", nul);
		
		function fill(fold, arr) {
			var whr = arr.map(ar => fold + "/" + ar);
			whr.forEach(wh => fs.ensureDir(wh, nul));
			return whr;
		}//fill

	};
	
}

function power(num, po) {
	if (po == 1) return num;
	return power(num, po - 1) + pow(num, po);
}//power
