
// Auto-generated

/** @typedef {import('./Node.js').default} Node*/
/**
 * @typedef {{
 *  [rule: string]: string
 * }} ActionTypes
 */

/**
 * @interface
 * @template T
 */
export default class Visitor {
    /**
     * Table that contains the function identifier for a rule's choices
     * and their fortran return type.
     * If a rule's choice doesn't have an entry in the table, it means
     * it doesn't have an action associated with it and should
     * be interpreted as having a character(len=:) return type by default.
     * @type {ActionTypes}
     */
    actionReturnTypes;
    /**
     * List with all the actions' code.
     * @type {string[]}
     */
    actions
    /**
     * Wheter we are traversing the starting rule or not.
     * @type {boolean}
     */
    translatingStart;
    /**
     * Id of the current rule we are traversing.
     * @type {string}
     */
    currentRule;
    /**
     * A rule can have many choices (e.g., rule = a/b/c). This variable stores
     * the index of the current choice in the current rule.
     * @type {number}
     */
    currentChoice;
    /**
     * A choice can have many expresions (e.g., rule = abc). This variable stores
     * the index of the current expression in the current choice.
     * @type {number}
     */
    currentExpr;

    /**
     * Para llamar a los grupos
    * @type {number}
    * 
     */
    nameGroup;

    /**
     * Para agregar las funciones de los grupos
     * @type {string[]}
     */
    groupsFunction;

    
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitGrammar(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitProducciones(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitOpciones(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitUnion(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitPredicate(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitPluck(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitLabel(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitAnnotated(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitAssertion(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitNegAssertion(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitString(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitCorchetes(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitRango(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitLiteralRango(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitDelimiterCount(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitDelimiterMinMax(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitNumberDelimiter(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitIdentificador(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitGrupo(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitAny(node){
        throw new Error('Implement in subclass');
    }
	
    /**
     * @abstract
     * @param {Node} node
     * @returns {T}
     */
    visitFinCadena(node){
        throw new Error('Implement in subclass');
    }
}
