import { orderNodes } from '../src/order-nodes';

describe('orderNodes', () => {
    let foo: HTMLElement;
    let bar: HTMLElement;
    let baz: HTMLElement;

    let res: Node[]

    describe('sibling elements', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <button id="foo">Foo</button>
                <button id="bar">Bar</button>
            `
            foo = document.getElementById('foo')    
            bar = document.getElementById('bar')
        })
    
        it('returns elements in order', () => {
            res = [foo, bar].sort(orderNodes);
    
            expect(res).toEqual([foo, bar])
        })
    
        it('sorts elements if not supplied in order', () => {
            res = [bar, foo].sort(orderNodes);
    
            expect(res).toEqual([foo, bar])
        })
    })

    describe('nested elements', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <button id="foo">Foo</button>
                <div>
                    <button id="bar">Bar</button>
                </div>
            `

            foo = document.getElementById('foo')    
            bar = document.getElementById('bar')
        })
    
        it('returns elements in order', () => {
            res = [foo, bar].sort(orderNodes);
    
            expect(res).toEqual([foo, bar])
        })
    
        it('sorts elements if not supplied in order', () => {
            res = [bar, foo].sort(orderNodes);
    
            expect(res).toEqual([foo, bar])
        })
    })

    describe('child elements', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <div id="foo">
                    <button id="bar">Bar</button>
                </div>
            `
            foo = document.getElementById('foo')    
            bar = document.getElementById('bar')
        })
    
        it('returns elements in order', () => {
            res = [foo, bar].sort(orderNodes);
    
            expect(res).toEqual([foo, bar])
        })
    
        it('treats parents as if they are before', () => {
            res = [bar, foo].sort(orderNodes);
    
            expect(res).toEqual([foo, bar])
        })
    })

    describe('complex DOM', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <div>
                    <section id="foo">
                        <button id="bar">Bar</button>
                    </section>
                </div>
                <button id="baz">Baz</button>
            `

            foo = document.getElementById('foo')    
            bar = document.getElementById('bar')
            baz = document.getElementById('baz')
        })
    
        it('returns elements in order', () => {
            res = [foo, bar, baz].sort(orderNodes);
    
            expect(res).toEqual([foo, bar, baz])
        })
    
        it('treats parents as if they are before', () => {
            res = [bar, baz, foo].sort(orderNodes);
    
            expect(res).toEqual([foo, bar, baz])
        })    
    })

})