
// Auto-generated

/**
 * @template T
 * @typedef {import('./Visitor.js').default<T>} Visitor
 */
/**
 * @typedef {import('./Node.js').default} Node
 */


/**
 * @implements {Node}
 */
export class Grammar {
    /**
     *
     * @param {Producciones[]} rules
	 * @param {{before: string; after?: string}=} globalCode
     */
    constructor(rules, globalCode) {
        this.rules = rules;
		this.globalCode = globalCode;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitGrammar(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Producciones {
    /**
     *
     * @param {string} id
	 * @param {Opciones} expr
	 * @param {string=} alias
	 * @param {boolean=} start
     */
    constructor(id, expr, alias, start) {
        this.id = id;
		this.expr = expr;
		this.alias = alias;
		this.start = start;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitProducciones(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Opciones {
    /**
     *
     * @param {Union[]} exprs
     */
    constructor(exprs) {
        this.exprs = exprs;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitOpciones(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Union {
    /**
     *
     * @param {Node[]} exprs
	 * @param {Predicate=} action
     */
    constructor(exprs, action) {
        this.exprs = exprs;
		this.action = action;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitUnion(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Predicate {
    /**
     *
     * @param {string} returnType
	 * @param {string} code
	 * @param {{ [label: string]: string }} params
     */
    constructor(returnType, code, params) {
        this.returnType = returnType;
		this.code = code;
		this.params = params;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitPredicate(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Pluck {
    /**
     *
     * @param {Label} labeledExpr
	 * @param {boolean=} pluck
     */
    constructor(labeledExpr, pluck) {
        this.labeledExpr = labeledExpr;
		this.pluck = pluck;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitPluck(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Label {
    /**
     *
     * @param {Annotated} annotatedExpr
	 * @param {string=} label
     */
    constructor(annotatedExpr, label) {
        this.annotatedExpr = annotatedExpr;
		this.label = label;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitLabel(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Annotated {
    /**
     *
     * @param {Node} expr
	 * @param {(string|Node)=} qty
	 * @param {boolean=} text
     */
    constructor(expr, qty, text) {
        this.expr = expr;
		this.qty = qty;
		this.text = text;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitAnnotated(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Assertion {
    /**
     *
     * @param {Node} assertion
     */
    constructor(assertion) {
        this.assertion = assertion;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitAssertion(this);
    }
}
    

/**
 * @implements {Node}
 */
export class NegAssertion {
    /**
     *
     * @param {Node} assertion
     */
    constructor(assertion) {
        this.assertion = assertion;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitNegAssertion(this);
    }
}
    

/**
 * @implements {Node}
 */
export class String {
    /**
     *
     * @param {string} val
	 * @param {boolean=} isCase
     */
    constructor(val, isCase) {
        this.val = val;
		this.isCase = isCase;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitString(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Corchetes {
    /**
     *
     * @param {(LiteralRango|Rango)[]} chars
	 * @param {boolean=} isCase
     */
    constructor(chars, isCase) {
        this.chars = chars;
		this.isCase = isCase;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitCorchetes(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Rango {
    /**
     *
     * @param {string} bottom
	 * @param {string} top
	 * @param {boolean=} isCase
     */
    constructor(bottom, top, isCase) {
        this.bottom = bottom;
		this.top = top;
		this.isCase = isCase;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitRango(this);
    }
}
    

/**
 * @implements {Node}
 */
export class LiteralRango {
    /**
     *
     * @param {string} val
	 * @param {boolean=} isCase
     */
    constructor(val, isCase) {
        this.val = val;
		this.isCase = isCase;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitLiteralRango(this);
    }
}
    

/**
 * @implements {Node}
 */
export class DelimiterCount {
    /**
     *
     * @param {Node} count
	 * @param {Node=} expr
     */
    constructor(count, expr) {
        this.count = count;
		this.expr = expr;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitDelimiterCount(this);
    }
}
    

/**
 * @implements {Node}
 */
export class DelimiterMinMax {
    /**
     *
     * @param {Node=} min
	 * @param {Node=} max
	 * @param {Node=} expr
     */
    constructor(min, max, expr) {
        this.min = min;
		this.max = max;
		this.expr = expr;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitDelimiterMinMax(this);
    }
}
    

/**
 * @implements {Node}
 */
export class NumberDelimiter {
    /**
     *
     * @param {string} val
     */
    constructor(val) {
        this.val = val;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitNumberDelimiter(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Identificador {
    /**
     *
     * @param {string} id
     */
    constructor(id) {
        this.id = id;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitIdentificador(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Grupo {
    /**
     *
     * @param {Opciones} expr
     */
    constructor(expr) {
        this.expr = expr;
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitGrupo(this);
    }
}
    

/**
 * @implements {Node}
 */
export class Any {
    /**
     *
    
     */
    constructor() {
        
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitAny(this);
    }
}
    

/**
 * @implements {Node}
 */
export class FinCadena {
    /**
     *
    
     */
    constructor() {
        
    }

    /**
     * @template T
     * @param {Visitor<T>} visitor
     * @returns {T}
     */
    accept(visitor) {
        return visitor.visitFinCadena(this);
    }
}
    
