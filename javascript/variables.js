
// Examples showing differences between var, let, and const

// 1) Function scope vs block scope
function scopeExample() {
	if (true) {
		var a = 'var scoped to function';
		let b = 'let scoped to block';
		const c = 'const scoped to block';
	}
	console.log('a (var) accessible here:', a); // accessible
	try { console.log('b (let) accessible here:', b); } catch (e) { console.log('b (let) error:', e.message); }
	try { console.log('c (const) accessible here:', c); } catch (e) { console.log('c (const) error:', e.message); }
}
scopeExample();

// 2) Re-declaration: var can be re-declared, let/const cannot
var x = 1;
var x = 2; // allowed
console.log('var redeclared x =', x);

let y = 1;
try { let y = 2; } catch (e) { console.log('let redeclare error:', e.message); }

const z = 1;
try { const z = 2; } catch (e) { console.log('const redeclare error:', e.message); }

// 3) Re-assignment: var and let can be reassigned; const cannot (but objects can be mutated)
var v = { name: 'old' };
v = { name: 'new' }; // allowed
console.log('var reassigned v =', v);

let l = { count: 0 };
l.count = 1; // mutation allowed
console.log('let mutated l =', l);

const o = { items: [] };
o.items.push('item1'); // allowed: mutating the object
console.log('const mutated object o =', o);
try { o = {}; } catch (e) { console.log('const reassign error:', e.message); }

// 4) Hoisting and Temporal Dead Zone (TDZ)
console.log('hoistedVar before declaration =', hoistedVar); // undefined because var is hoisted
try { console.log('tdzLet before declaration =', tdzLet); } catch (e) { console.log('tdzLet error (TDZ):', e.message); }
var hoistedVar = 'I am hoisted';
let tdzLet = 'I am in TDZ before declaration';

// 5) Summary prints
console.log('\nSummary:');
console.log('- var: function-scoped, hoisted (initialized to undefined), can be re-declared and reassigned.');
console.log('- let: block-scoped, not accessible before declaration (TDZ), cannot be re-declared in same scope, can be reassigned.');
console.log('- const: block-scoped, like let (TDZ), must be initialized, cannot be reassigned, but object contents can be mutated.');
