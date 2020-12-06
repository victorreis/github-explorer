import { expect } from 'chai';

import { requestErrorHandler } from '../../src/Services/ErrorHandlerService';

describe('Services/ErrorHandlerService', () => {
    describe('requestErrorHandler', () => {
        context('Error object with with a message key', () => {
            it('Should show a console error and throw an error with the message.', () => {
                expect(() => requestErrorHandler({ message: 'Error 404' }))
                    .to.throw()
                    .with.property('message', 'Error 404');
            });
        });

        context('Undefined or Null error object', () => {
            expect(() => requestErrorHandler(null)).to.throw(
                null,
                'Aplication error.'
            );
            expect(() => requestErrorHandler(undefined)).to.throw(
                undefined,
                'Aplication error.'
            );
        });
    });
});
