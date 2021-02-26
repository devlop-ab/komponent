'use strict';

interface KomponentInterface
{
    addEventListener(
        eventTarget : Element,
        type : string,
        listener : EventListenerOrEventListenerObject,
        options? : boolean | AddEventListenerOptions | undefined,
    ) : void;

    remove() : void;

    querySelector(selectors : string) : Element | null;

    querySelectorAll(selectors : string) : NodeList;
};

export default KomponentInterface;
