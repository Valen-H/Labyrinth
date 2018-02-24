err = "";
try {
if(typeof auto=="undefined") auto = "strict";
/*  <true> : manual becomes automated,
	strict : getters/setters,
	heavy : slow funcs replace normal funcs,
	light : fast funcs replace normal ones,
	nocenter : transform funcs do not affect each other,
	fill : canvas auto ctx.fill(), 
	stroke : canvas auto ctx.stroke(),
	full : canvas auto fullscreen, 
	unlock : canvas funcs keep previous path,
	lock : canvas funcs always begin new paths - auto initial centering
*/
AUTO = new Object();
Object.defineProperties(AUTO,{STRICT:{value:1,writable:false,configurable:false},HEAVY:{value:2,writable:false,configurable:false},LIGHT:{value:4,writable:false,configurable:false},NOCENTER:{value:8,writable:false,configurable:false},FILL:{value:16,writable:false,configurable:false},STROKE:{value:32,writable:false,configurable:false},FULL:{value:64,writable:false,configurable:false},UNLOCK:{value:128,writable:false,configurable:false},LOCK:{value:256,writable:false,configurable:false}});
if (typeof Auto=="undefined") Auto = AUTO.STRICT;
/*
	Auto |= Constant //add once
	Auto ^= Constant //toggle
	(Auto & Constant) == Constant //check
	Auto &= ~Constant //remove once
*/
nul = function(){};
nodemodule = new Object();
falseReg = /^(false|null|""|''|0|off|no|[]|{}|``|)$/gi;
alph = "abcdefghijklmnopqrtsuvwxyz";
ALPH = alph.toUpperCase();
Alph = (alph+ALPH+"0123456789");
cmp = function cmp(arr) {
	var nar = [];
	for (var mat = 0; mat < arr.length; mat++) {
		if (arr[mat]!==undefined) {
			if (!(arr[mat] instanceof Array)||arr[mat].length===undefined) {
				nar.push(arr[mat]);
			} else {
				nar = nar.concat(cmp(arr[mat]));
			}
		}
	}
	return nar;
}//cmp
Array.prototype.cmp = function(dpt,rev) {
	var nar = [];
	if (!rev) {
		if (!dpt) {
			return this.inh(cmp(this));
		}
		while (dpt-->0) {
			this.each(function(val,ind,arr) {
				if (val instanceof Array) {
					nar = nar.concat(val);
				} else {
					nar.push(val);
				}
			});
			this.inh(nar);
			nar = [];
		}
	} else {
		while (dpt-->0) {
			rep(this.length/rev,(function(stp) {
				nar.push(this.slice(stp*rev,rev+stp*rev));
			}).bind(this));
		}
		this.inh(nar);
		nar = [];
	}
	return this;
};
rnd = function rnd(frm,to,rd) {
	if (frm===undefined) {
		return "#"+Math.round(Math.random()*16777215).toString(16);
	} else {
		to = to===undefined?frm:to;
		frm = frm==to?0:frm;
		var tmp = [Math.min(frm,to),Math.max(frm,to)];
		frm = tmp[0];
		to = tmp[1];
		return !rd?Math.round(Math.random()*(to-frm)+frm):(Math.random()*(to-frm)+frm);
	}
}//rnd
Math.rnd = rnd;
Number.prototype.rnd = function(frm,rd) {
	rnd(frm,this,rd);
};
Array.prototype.rnd = function(rd) {
	var ind = rnd(0,this.length-1);
	if (rd) {
		return ind;
	}
	return this[ind];
};
String.prototype.rnd = function() {
	return this;
};
swt = function swt(a) {
	if (a) auto = auto.toString()+a;
	if (/heavy/gmi.test(auto.toString())||(Auto&AUTO.HEAVY)==AUTO.HEAVY) {
		rnd = function(frm,to,rd) {
			if (frm===undefined) {
				return "rgba("+Math.rnd(255)+","+Math.rnd(255)+","+Math.rnd(255)+","+Math.rnd(0,1,1)+")";
			} else {
				to = to===undefined?frm:to;
				frm = frm==to?0:frm;
				var tmp = [Math.min(frm,to),Math.max(frm,to)];
				frm = tmp[0];
				to = tmp[1];
				return !rd||[frm,to].every(function(val){return !/\./gmi.test(val.toString())})?Math.round(Math.random()*(to-frm)+frm):(Math.random()*(to-frm)+frm);
			}
		};
	} else if (/light/gmi.test(auto.toString())||(Auto&AUTO.LIGHT)==AUTO.LIGHT) {
		rnd = function(frm,to,rd) {
			if (frm===undefined) {
				return "#"+Math.round(Math.random()*16777215).toString(16);
			} else {
				return !rd?Math.round(Math.random()*(to-frm)+frm):(Math.random()*(to-frm)+frm);
			}
		};
	}
	if ((!/strict/gmi.test(auto.toString())&&(Auto&AUTO.STRICT)!=AUTO.STRICT)&&Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__) {
		try {
			if(!Object.prototype._ins)Object.prototype.__defineGetter__("_ins",function(){return this.ins()});
			if(!Object.prototype._Ins)Object.prototype.__defineGetter__("_Ins",function(){return this.Ins()});
			if(!Object.prototype._prp)Object.prototype.__defineGetter__("_prp",function(){return Object.getOwnPropertyNames(this)});
			if(!Object.prototype.Values)Object.prototype.__defineGetter__("Values",function(){return this.values()});
			if(!Object.prototype.Keys)Object.prototype.__defineGetter__("Keys",function(){return Object.keys(this)});
			if(!Object.prototype.Names)Object.prototype.__defineGetter__("Names",function(){return Object.names(this)});
			if(!Object.prototype.string)Object.prototype.__defineGetter__("string",function(){return this.toString()});
			if(!Object.prototype.Last)Object.prototype.__defineGetter__("Last",function(){return this.last()});
			if(!Object.prototype.First)Object.prototype.__defineGetter__("First",function(){return this.first()});
			if(!Object.prototype.Alt)Object.prototype.__defineGetter__("Alt",function(){return this.alt()});
		} catch(e) {}
	}
	return auto;
}//swt
swt();
if (Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__) {
	if(!Array.prototype.datatype){Array.prototype.__defineGetter__("datatype",function() {
		var type = 0;
		for (var stp = 0; stp < this.length; stp++) {
			if ((typeof this[stp]=="number"&&!type)||(typeof this[stp]=="string"&&type<2)||((this[stp] instanceof Array)&&type<3)||((this[stp] instanceof Object)&&type<4)) {
				type++
			}
		}
		return type==1?"Number":(type==2?"String":(type==3?"Array":"Object"));
	});
	Array.prototype.__defineSetter__("datatype",function() {
		var cls = eval(this.datatype), nar = [];
		this.forEach((function(val,ind,arr){
			nar.push(new cls(val));
		}).bind(this));
		this.inh(nar);
		return this;
		});
	}
	if(!Object.prototype._ins)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("_ins",function(){return this.ins()})});
	if(!Object.prototype._Ins)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("_Ins",function(){return this.Ins()})});
	if(!Object.prototype._prp)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("_prp",function(){return Object.getOwnPropertyNames(this)})});
	if(!Object.prototype.Values)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("Values",function(){return this.values()})});
	if(!Object.prototype.Keys)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("Keys",function(){return Object.keys(this)})});
	if(!Object.prototype.Names)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("Names",function(){return Object.names(this)})});
	if(!Object.prototype.string)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("string",function(){return this.toString()})});
	if(!Object.prototype.Last)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("Last",function(){return this.last()})});
	if(!Object.prototype.First)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("First",function(){return this.first()})});
	if(!Object.prototype.Alt)[Array,String,Number].forEach(function(each){each.prototype.__defineGetter__("Alt",function(){return this.alt()})});
	if(!Array.prototype.Sum)Array.prototype.__defineGetter__("Sum",function(){return this.sum()});
	if(!Array.prototype.Fac)Array.prototype.__defineGetter__("Fac",function(){return this.fac()});
	if(!Array.prototype.Pure)Array.prototype.__defineGetter__("Pure",function(){return this.pure()});
	if(!Array.prototype.Cmp)Array.prototype.__defineGetter__("Cmp",function(){return cmp(this)});
	if(!Array.prototype.Rnd)Array.prototype.__defineGetter__("Rnd",function(){return this.rnd()});
	if(!Array.prototype.Shf)Array.prototype.__defineGetter__("Shf",function(){return this.clone().shf()});
	if(!Array.prototype.Max)Array.prototype.__defineGetter__("Max",function(){return this.max()});
	if(!Array.prototype.Min)Array.prototype.__defineGetter__("Min",function(){return this.min()});
	if(!String.prototype.Bool)String.prototype.__defineGetter__("Bool",function(){return this.bool()});
	if(!Number.prototype.Sig)Number.prototype.__defineGetter__("Sig",function(){return this.sig()});
} else {
	console.warn("Object.prototype.__defineGetter__  and/or  Object.prototype.__defineGetter__  are deprecated.");
}
dst = function dst(x,y,d) {
	if (x!==undefined&&y!==undefined&&d===undefined) {
		return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
	} else if (d!==undefined&&(x!==null||y!==null)&&(x===null||y===null)) {
		return Math.sqrt(Math.pow(d,2)-Math.pow(y!==null?y:(x!==null?x:0)));
	} else if (x!==undefined&&y!==undefined&&d!==undefined) {
		return Math.atan2(y,x)*180/Math.PI;
	}
	console.warn("Invalid arguments in dst()");
	return false;
}//dst
Math.dst = dst;
Number.prototype.dst = function(a) {
	if (a===undefined) {
		return Math.cbrt(this);
	}
	return Math.sqrt(Math.pow(this,2)-Math.pow(a,2));
};
Dst = function Dst(x,y,X,Y,d) {
	return dst(x-X,y-Y,d);
}//Dst
Math.Dst = Dst;
dst3 = function dst3(x,y,z,d) {
	if (d===undefined) {
		return Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2));
	} else if ((x!==undefined&&y!==undefined)&&(x!==null&&y!==null)&&d===undefined) {
		return Math.sqrt(Math.pow(d,2)-Math.pow(y,2)-Math.pow(x,2));
	} else if ((x!==undefined&&z!==undefined)&&(x!==null&&z!==null)&&d===undefined) {
		return Math.sqrt(Math.pow(d,2)-Math.pow(z,2)-Math.pow(x,2));
	} else if ((z!==undefined&&y!==undefined)&&(y!==null&&z!==null)&&d===undefined) {
		return Math.sqrt(Math.pow(d,2)-Math.pow(y,2)-Math.pow(z,2));
	} else if ([x,y,z,d].every(function(val){return val!==undefined})) {
		return [Math.atan2(y,z)*180/Math.PI,Math.atan2(z,x)*180/Math.PI,Math.atan2(y,x)*180/Math.PI];
	}
	console.warn("Invalid arguments in dst3()");
	return false;
}//dst3
Math.dst3 = dst3;
Dst3 = function Dst3(x,y,z,X,Y,Z,d) {
	return dst3(x-X,y-Y,z-Z,d);
}//Dst3
Math.Dst3 = Dst3;
col = function col(x,y,X,Y,dx,dy,dX,dY,r,s) {
	if (dY!==undefined&&r===undefined&&s===undefined) {
		var bx = Math.min(x,X,x+dx,X+dX);
		var by = Math.min(y,Y,y+dy,Y+dY);
		var Bx = Math.max(x,X,x+dx,X+dX);
		var By = Math.max(y,Y,y+dy,Y+dY);
		return Math.abs(Bx-bx)<=dx+dX&&Math.abs(By-by)<=dy+dY;
		//box-box x,y,X,Y,dx,dy,dX,dY
	} else if (dX!==undefined&&r===undefined&&s===undefined) {
		return dst(x+X/2-dx,y+Y/2-dy)<=dX+dst(X/2,Y/2);
		//box-circle 7
	} else if (r===undefined&&s===undefined) {
		return dst(x-Y,y-(dx?dx:0))<=X+(dy?dy:0);
		//circle/point-circle/point <=6 >=4
	} else if (s!==undefined) {
		var o1 = (180-(360/dx))/2;
		var p1 = Lim((dst(dy-x,dX-y,1)-Y),0,360)%(360/dx);
		var r1 = X/Math.sin(deg(180-p1-o1))*Math.sin(deg(o1));
		var o2 = (180-(360/s))/2;
		var p2 = Lim((dst(x-dy,y-dX,1)-r),0,360)%(360/s);
		var r2 = R/Math.sin(deg(180-p2-o2))*Math.sin(deg(o2));
		return dst(x-dy,y-dX)<=r1+r2;
		//polygon-polygon 10
	} else if (r==1) {
		var o1 = (180-(360/dx))/2;
		var p1 = Lim((dst(dy-x,dX-y,1)-Y),0,360)%(360/dx);
		var r1 = X/Math.sin(deg(180-p1-o1))*Math.sin(deg(o1));
		return dst(x-dy,y-dX)<=r1+dY;
		//polygon-circle 9
	} else if (r==2) {
		var x1 = x, y1 = y, x2 = X, y2 = Y, X1 = dx, Y1 = dy, X2 = dX, Y2 = dY;
		if (x1!=x2&&X1!=X2) {
			var l = (y1-y2)/(x1-x2), L = (Y1-Y2)/(X1-X2);
			var v = y1-l*x1, V = Y1-l*X1;
			if (l!=L) {
				var x = (V-v)/(l-L);
				var y = l*x+v;
				if (x>=Math.min(x1,x2)&&x<=Math.max(x1,x2)&&x>=Math.min(X1,X2)&&x<=Math.max(X1,X2)&&y>=Math.min(y1,y2)&&y<=Math.max(y1,y2)&&y>=Math.min(Y1,Y2)&&y<=Math.max(Y1,Y2)) {
					return true;
				} else {
					return false;
				}
			} else if (v==V) {
				return true;
			} else {
				return false;
			}
		} if ((x1==x2||X1==X2)&&(x1!=x2||X1!=X2)) {
			var h = x1!=x2?[x1,y1,x2,y2]:[X1,Y1,X2,Y2];
			var x = x1==x2?x1:X1;
			var l = (h[2]-h[3])/(h[0]-h[1])
			var y = h[1]-l*h[0];
			if (x>=Math.min(x1,x2)&&x<=Math.max(x1,x2)&&x>=Math.min(X1,X2)&&x<=Math.max(X1,X2)&&y>=Math.min(y1,y2)&&y<=Math.max(y1,y2)&&y>=Math.min(Y1,Y2)&&y<=Math.max(Y1,Y2)) {
				return true;
			}
			return false;
		} else if (x1==x2&&X1==X2&&x1==X1) {
			var x = x1;
			if (y1<=Math.max(Y1,Y2)||y1>=Math.min(Y1,Y2)||y2<=Math.max(Y1,Y2)||y2>=Math.min(Y1,Y2)) {
				return true;
			}
			return false;
		}
		//line-line 9
	}
	return false;
	//TODO: 3D  O_O
}//col
Math.col = col;
col3 = function col3(x,y,z,r,X,Y,Z,R) {
	return Dst3(x,y,z,X,Y,Z)<=r+R;
	//circle/point-circle/point
}//col3
Math.col3 = col3;
rep = function rep(cnt,com,ini) {
	var val = [];
	for (var stp = (ini?ini:0); stp < cnt+(ini?ini:0); stp++) {
		if (typeof com=="string") {
			val.push(eval(com.replace(/@(?!\\(?!\\))/gmi,stp).replace(/\\(?!\\(?!\\))/gmi,"")));
		} else {
			val.push(com(stp));
		}
	}
	return val.filter(function(va){return va!==undefined;});
}//rep
String.prototype.rep = Function.prototype.rep = function(cnt,ini) {
	return rep(cnt,this,ini);
};
deg = function deg(dg,rd) {
	if (typeof dg!="string"&&!rd) {
		return (dg/180)*Math.PI;
		//rad
	} else {
		return (Number(dg.toString().replace("π",Math.PI))/Math.PI)*180;
	}
}//deg
Number.prototype.deg = function(rd) {
	return deg(this,rd);
};
Math.deg = deg;
per = function per(pr,mx,gr) {
	var gr = gr||100;
	return pr*mx/gr;
}//per
Math.per = per;
Number.prototype.per = function(pr,gr) {
	return per(!isNaN(pr)?pr:1,this,gr?gr:100);
};
con = function con(comm,init) {
	try {
		if (typeof comm=="string") {
			if (eval(comm)===true) {
				return;
			}
		} else {
			if (comm()===true) {
				return;
			}
		}
	} catch(e) {}
	setTimeout(con,init||1,comm||" ",init||1);
}//con
ins = function ins(el) {
	var arr = [];
	for (prop in el) {
		arr.push(typeof prop=="object"?Ins(prop):prop);
	}
	return arr;
}//ins
Ins = function Ins(el) {
	return JSON.stringify(el);
}//Ins
Object.prototype.prp = function(ind) {
	return this[Object.keys(this)[ind?Number(ind):0]];
};
Object.prototype.Prp = function(ind) {
	return Object.keys(this)[ind?Number(ind):0];
};
Object.prototype.values = function() {
	return Object.keys(this).filter(function(val){return val!="Values"?true:false}).map((function(val) {
		return this[val];
	}).bind(this));
};
Object.prototype.names = function() {
	return Object.getOwnPropertyNames(this);
};
Object.names = Object.getOwnPropertyNames;
Object.prototype.keys = function() {
	return Object.keys(this);
};
Object.values = function values(obj) {
	return obj.values();
};
Object.prototype.ins = function() {
	return ins(this);
};
Object.prototype.Ins = function() {
	return Ins(this);
};
//ins,Ins,prp,Prp : deprecated
dup = function dup(str,tim) {
	tim = tim?tim:0;
	var st = str?str:"";
	while (tim--) {
		if (typeof str!="object") {
			str += st.toString();
		} else {
			str = str.concat(st);
		}
	}
	return str;
}//dup
//^deprecated
Array.prototype.dup = String.prototype.dup = Number.prototype.dup = function(tim) {
	return dup(this,tim);
};
if (!String.prototype.repeat) {
	String.prototype.repeat = String.prototype.dup;
} else {
	String.prototype.dup = String.prototype.repeat;
}
alt = function alt(bool) {
	return !Boolean(bool);
}//alt
Object.prototype.alt = function() {
	return alt(this);
};
sig = function sig(n) {
	n = Number(n);
	if (!n) {
		return 0;
	}
	return n/Math.abs(n);
}//sig
String.prototype.sig = Number.prototype.sig = function() {
	return sig(this);
};
if (!Math.sign) {
	Math.sign = sig;
}
Math.sum = Number.prototype.sum = function(lst) {
	lst = lst?lst:(Number(this)||"")
	var acc = 0;
	while (lst) {
		acc += lst;
		lst--;
	}
	return acc;
};
Array.prototype.sum = function(func) {
	var tmp = 0;
	this.forEach(function(val,ind,arr) {
		tmp += val;
		if (func) {
			return func(tmp,val,ind,arr);
		}
	});
	return tmp;
};
//^deprecated
if (!Array.prototype.reduce) {
	Array.prototype.reduce = Array.prototype.sum;
}
Math.fac = function(lst) {
	var acc = 1;
	while (lst) {
		acc *= lst;
		lst--;
	}
	return acc;
};
Array.prototype.fac = function() {
	var tmp = 0;
	this.forEach(function(val) {
		tmp *= val;
	});
	return tmp;
};
Array.prototype.rmv = String.prototype.rmv = function(elm,n) {
	var arr = this.split("");
	if (typeof elm!="number"&&this.indexOf(elm)<0) {
		return this;
	}
	arr.splice(typeof elm=="number"&&!n?elm:this.indexOf(elm),1);
	if (this instanceof String) {
		return arr.join("");
	}
	return arr;
};
Array.prototype.add = function add(elm) {
	if (!this.has(elm)) {
		this.push(elm);
	}
	return this;
};
Array.prototype.has = function has(elm) {
	return this.indexOf(elm)>=0;
};
//^deprecated
if (!Array.prototype.includes) {
	Array.prototype.includes = Array.prototype.has;
}
Array.prototype.tog = function(elm) {
	if (this.has(elm)) {
		return this.rmv(elm);
	}
	return this.add(elm);
};
Array.prototype.flt = function() {
	var nar = [];
	this.forEach(function(val) {
		nar.add(val);
	});
	return this.inh(nar);
};
flt = function flt(elm) {
	var nar = [];
	elm.forEach(function(val) {
		nar.add(val);
	});
	return nar;
}//flt
Array.prototype.pure = function() {
	return this.concat([])||new Array();
};
if (!Array.prototype.clone) {
	Array.prototype.clone = Array.prototype.pure;
}
//^deprecated
Array.prototype.inherit = Array.prototype.inh = function(array) {
	var arr = array.length>this.length?array:this;
	arr.each((function(val,ind,arr) {
		this[ind] = array[ind];
		while (this.last()===undefined&&this.length) {
			this.pop();
		}
	}).bind(this));
	return this;
};
if (!Array.prototype.copy) {
	Array.prototype.copy = function(ar) {
		if (!ar) {
			return this.clone();
		}
		return this.inh(ar);
	};
}
Array.prototype.shf = Array.prototype.shf = function() {
	var i = this.length,j,temp;
	if (!i) {
		return this;
	}
	while (--i) {
		j = rnd(i);
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
};
String.prototype.shf = Number.prototype.shf = function() {
	return this.split("").shf();
};
lim = function lim(n,m,M) {
	n = Number(n);
	m = Number(m);
	M = Number(M);
	return n<m?m:(n>M?M:n);
}
Math.lim = lim;
Object.prototype.lim = String.prototype.lim = Number.prototype.lim = function(min,max) {
	return lim(this,min,max||this);
};
Array.prototype.lim = function(min,max) {
	this.forEach(function(val,ind) {
		this[ind] = lim(val,min,max);
	});
	return this;
};
Lim = function Lim(n,m,M) {
	n = Number(n);
	m = Number(m);
	M = Number(M);
	return n<m?M-Math.abs(m-n)%m:(n>M?m+Math.abs(M-n)%M:n);
}
Math.Lim = Lim;
Object.prototype.Lim = String.prototype.Lim = Number.prototype.Lim = function(min,max) {
	return Lim(this,min,max||"0");
};
Array.prototype.Lim = function(min,max) {
	this.forEach(function(val,ind) {
		this[ind] = Lim(val,min,max);
	});
	return this;
};
bool = function bool(dt) {
	return dt==="true"||dt==="1"?true:(dt==="false"||dt==="0"||dt==="null"||dt==="undefined"?false:Boolean(dt));
}//bool
String.prototype.bool = function() {
	return bool(this.toString());
};
par = function par(fun,num,nam,cod) {
	var arr = rep(num,function(st) {
		return nam+(st+1);
	});
	return eval(fun+"=function "+fun+"("+arr.join(",")+","+nam+","+nam+"0){"+nam+"=["+arr.join(",")+"];"+nam+"0=['"+fun+"',"+num+"];"+(typeof cod=="string"?cod:"return ("+cod+")()")+"}");
}//par
Min = Math.Min = function Min(n) {
	return Math.min.apply(Math,n);
};
Max = Math.Max = function Max(n) {
	return Math.max.apply(Math,n);
};
Array.prototype.max = function() {
	return Max(this);
};
Array.prototype.min = function() {
	return Min(this);
};
anl = Math.anl = function anl(n,a,b,A,B) {
	var df = 100*(n-Math.min(a,b))/(Math.max(a,b)-Math.min(a,b));
	return Math.min(A,B)+per(df,Math.max(A,B)-Math.min(A,B));
}//anl
Number.prototype.anl = function(a,b,A,B) {
	return anl(this,a,b,A,B);
};
{min = Math.min;
max = Math.max;
sqrt = Math.sqrt;
cbrt = Math.cbrt;
sin = Math.sin;
cos = Math.cos;
pow = Math.pow;}
if (Math._prp) {
	Math._prp.forEach((function(val,ind){
		if (!this[val]) {
			this[val] = Math[val];
		}
	}).bind(global));
}
Object.prototype.last = function(off) {
	return this[Object.keys(this)[Object.keys(this).length-1-(off?off:0)]];
};
Object.prototype.first = function(off) {
	return this[Object.keys(this)[off?off:0]];
};
if (!Array.prototype.fill) {
	Array.prototype.fill = function(vl,frm,to) {
		if (frm===undefined) {
			this.forEach(function(val,ind) {
				this[ind] = vl;
			})
		} else {
			for (var stp = frm; stp <= to!==undefined?to:(this.length-1); stp++) {
				this[stp] = vl;
			}
		}
		return this;
	};
}
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(c,l) {
		var reg = new RegExp("^"+c);
		return reg.test(this.slice(l?l:0));
	};
}
String.prototype.starts = String.prototype.startsWith;
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(c,l) {
		var reg = new RegExp(c+"$");
		return reg.test(this.slice(0,l?l:this.length));
	};
}
String.prototype.ends = String.prototype.endsWith;
if (!String.prototype.includes) {
	String.prototype.includes = function(c,l) {
		var reg = new RegExp(c);
		return reg.test(this.slice(l?l:0));
	};
}
if (!String.prototype.contains) {
	String.prototype.contains = String.prototype.includes;
}
Array.prototype.split = function(s,j) {
	return this.join(j?j:"").split(s?s:"");
};
String.prototype.join = function(j,s) {
	return this.split(s?s:"").join(j?j:"");
};
if (!String.prototype.toString) {
	String.prototype.toString = function() {return this;};
}
if (!escape) {
	escape = encodeURI||encodeURIComponent;
}
if (!unescape) {
	unescape = decodeURI||decodeURIComponent;
}
Object.prototype.each = Object.prototype.foreach = Object.prototype.forEach = Array.prototype.forEach;
Number.prototype.forEach = function(func) {
	return this.toString().forEach(func);
};
String.prototype.each = function(c) {
	return c(this);
};
String.prototype.splice = function(str,end) {
	return this.split("").splice(str,end?end:(this.length-str)).join("");
};
Array.prototype.split = function() {
	return this;
};
xor = function xor(a,b) {
	return (a||b)&&!(a&&b);
}//xor
Boolean.prototype.xor = function(a) {
	return xor(this,a);
};
Matrix = function Matrix(array) {
	if (!(this instanceof Matrix)) {
		return new Matrix(array);
	}
	array.each(function(val,ind,arr) {
		while (val.length<arr[0].length) {
			val.push(0);
		}
	});
	this.m = array;
	this.row = this.m.length;
	this.column = this.m[0].length;
	this.values = cmp(this.m);
	Object.defineProperty(this,"_m",{get:function(){return this.values.copy().cmp(1,this.row=this.m.length)},set:function(val){this.m=val;this.values=cmp(this.m);this.row=this.m.length;this.column=this.m[0].length}});
	Object.defineProperty(this,"_row",{get:function(){return this.m.length},set:function(val){this.m=this.values.copy().cmp(1,this.values.length/val);this.row=this.m.length;this.column=this.m[0].length}});
	Object.defineProperty(this,"_column",{get:function(){return this.m[0].length},set:function(val){this.m=this.values.copy().cmp(1,this.column=val);this.row=this.m.length}});
	Object.defineProperty(this,"_values",{get:function(){return cmp(this.m)},set:function(val){this.values=val;this.m=this.values.copy().cmp(1,this.column);this.row=this.m.length;this.column=this.m[0].length}});
	this.add = function(ad) {
		if (!(ad instanceof Matrix)) {
			this._values = this._values.map(function(val) {
				return val+ad*1;
			});
		} else if (ad._row==1&&ad._column==this._column) {
			this._values = this._values.map(function(val,ind) {
				return val+ad._values[ind%ad._column]*1;
			});
		} else if (ad._row==this._row&&ad._column==this._column) {
			this._values = this._values.map(function(val,ind) {
				return val+ad._values[ind]*1;
			});
		}
		return this;
	};
	this.mult = this.multiply = function(ad) {
		if (!(ad instanceof Matrix)) {
			this._values = this._values.map(function(val) {
				return val*ad;
			});
		} else if (ad._row==1&&ad._column==this._column) {
			this._values = this._values.map(function(val,ind) {
				return val*ad._values[ind%ad._column];
			});
			this._m = this._values.clone().cmp(1,this._column);
			return this._values.Sum;
		} else if (ad._row==this._row&&ad._column==this._column) {
			this._values = this._values.map(function(val,ind) {
				return val*ad._values[ind];
			});
			this._m = this._values.clone().cmp(1,this._column);
			return this._values.Sum;
		}
		return this;
	};
	this.trans = this.transpose = function() {
		var tmp = this._row, nar = [];
		this._row = this._column;
		this._column = tmp;
		rep(this._row,function(stp) {
			nar.push([]);
		});
		this._m.each(function(val,ind) {
			val.each(function(va,id) {
				nar[id][ind] = va;
			});
		});
		this._m = nar;
		return this;
	};
	return this;
}//Matrix
exports.hlp = function hlp() {
	console.log(hlp.toString())
	/*
	[Array.]cmp([array]) -> converts multi-dimensional array to single-dinensional
	[Array.]rnd([from <Number>, to <Number>, non-rounded <Boolean>])|Rnd|Array.Rnd -> random number/element,leave arg(s) blank for random HEX.
	swt([append <String>]) -> refresh specific funcs and append flags on auto switch.
	[Math.]dst(x <Number>, y <Number>[, d <Number>]) -> provide (x,y) to calculate distance with pythagorean,provide (x||y,d) to calculate the missing parameter, (x,y,1) for degrees.
	[Math.]Dst(x1 <Number>, x2 <Number>, y1 <Number>, y2 <Number>) -> dst between 2 objects.
	[Math.]dst3(x <Number>, y <Number>, z <Number>, d <Number>) -> 3D dst.
	[Math.]Dst3(x <Number>, y <Number>, z <Number>, X <Number>, Y <Number>, Z <Number>) -> Dst between 2 objects.
	[Math.]col(x <Number>, y <Number>, X <Number>, Y <Number>, dx <Number>, dy <Number>, dX <Number>, dY <Number>) -> check if boxes collide.
	[Math.]col(X <Number>, Y <Number>, dx <Number>, dy <Number>, x <Number>, y <Number>, r <Number>) -> box-circle.
	[Math.]col(x <Number>, y <Number>, r <Number>, X <Number>, Y <Number>, R <Number>) -> circle-circle.
	[Math.]col(x <Number>, y <Number>, r <Number>, X <Number>, Y <Number>) -> circle-point.
	[Math.]col(x <Number>, y <Number>, r <Number>, ro <Number>, s <Number>, X <Number>, Y <Number>, R <Number>, RO <Number>, S <Number>) -> perfect polygon collisions.
	[Math.]col3(x <Number>, y <Number>, z <Number>, r <Number>, X <Number>, Y <Number>, Z <Number>, R <Number>) -> 3D spheres.
	[(Number|String|Function).]rep([count <Number>, command <Function>, intial <Number>]) -> repeat a command.
	[(Math|Number).]deg([degrees <Number>, radians <Boolean>]) -> convert degrees <=> radians.
	[(Number|Math).]anl([number <Number>, ]min <Number>, max <Number>, Min <Number>, Max <Number>) -> number from range [min,max] to range [Min,Max] analogically.
	[(Math|Number).]per([number <Number>, ]percentance <Number>[, scale=100 <Number>]) -> returns percentance of number.
	(String|Array|Number).wrp(wrap <String>) -> wrap between.
	[(Function|String|Number).]con([command <Function>, ]interval <Number>) -> run a command constantly, like setInterval but ignores first interval cooldown time.
	Object.((ins|Ins)()|_ins|_Ins) -> inspect object enumerable properties or stringify non circular struct.
	Object.((prp|Prp)(index <Number>)|_prp) -> grab object property (value|key) by index.
	Object.(keys()|Keys) -> an alternative of Object.keys(object)
	Object.(values()|Values) -> an alternative of Object.values(object)
	Deprecated: String.dup(times <Number>) -> repeat string pattern. Pollyfill of String.repeat.
	[Boolean.](alt([boolean  <Boolean>])|Alt) -> alternate boolean value.
	Number.(sig()|Sig)|[Math.]sig(number <Number>) -> signum (+1/-1/0).
	(Array|String).rmv(index) -> remove item from array/string.
	(String|Array|Number).wrp(wr) -> wrap between.
	Deprecated: Array.(pure()|Pure) -> grab array value instead of pointer.
	Image.(data()|Data) -> export image as base64.
	Array.(shf()|Shf) -> shuffle.
	Object.(last(index <Number>)|Last) -> last element.
	Object.(first(index <Number>)|First) -> first element.
	(Number|Math).lim(min <Number>, max <Number>) -> limit number range.
	(Number|Math).Lim(min <Number>, max <Number>) -> circular limit.
	(Number|Array).(sum()|Sum) -> sum of range (0,this).
	(Number|Array).(fac()|Fac) -> factorial of range.
	[Object.](bool([item <Object>])|Bool) -> boolean representation.
	par(function <String>, number <Number>, name <String>, code <String>) -> create number with specific number of params... E.x. : par("func",5,"param",function(){alert(param2)}||"alert(param2)") - func=function func(param1,param2,param3,param4,param5,param,param0){alert(param2)}.
	Math.(Max|Min)(numarray <Array>)|Array.((min|max)()|(Min|Max)) -> max/min num of array.
	Array.fill(value <Object>[, from <Number>, to <Number>]) -> fill polyfill.
	[Boolean.]xor(a <Boolean>[, b <Boolean>]) -> a or b but not both.
	Array.add(elm <Object>) -> add element if not already in array.
	Array.has(elm <Object>) -> check if array has element.
	Array.tog(element <Object>) -> toggle array element.
	Array.flt() -> array elements become unique.
	Array.inh(array <Array>) -> inherit on real array.
	Matrix(2Darray <Array>) -> math matrix class, m : array, values : singledimensional m, row : row length , column : column length, trans() : transpose, mult(<Matrix|Number>) : multiply, add(<Matrix|Number>) : add.
	D(x <Number>,y <Number>,z <Number>) -> 3D point, t(camera <Array>), T(distance <Object>), i().
	err -> errors
	csl -> console
	auto -> mode switch, strict = no getters
	Auto -> like auto but bitwise
	AUTO -> Auto's constants
	nul -> function(){}
	Sec -> uptime
	alph -> "abcdefghijklmnopqrtsuvwxyz"
	ALPH -> alph.toUpperCase()
	Alph -> (alph+ALPH+"0123456789")
	prefix -> ["moz","webkit","o","ms","khtml","ie"]
	Rnd -> random HEX color
	*/
}//hlp
}catch(e){err+=e+"\n"}
