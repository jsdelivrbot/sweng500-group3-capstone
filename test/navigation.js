var chai = require('chai');
var expect    = require("chai").expect;
var request = require("request");
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe("Sense navigation and routing", function() {

    describe('Sense Home page navigation', () => {
        it('it should return status 200', (done) => {
            chai.request('http://localhost:5000')
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('Sense Episode Survey page navigation', () => {
        it('it should return status 200', (done) => {
            chai.request('http://localhost:5000')
                .get('/episodesurvey')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('Sense Adjustment Response Survey page navigation', () => {
        it('it should return status 200', (done) => {
            chai.request('http://localhost:5000')
                .get('/adjustmentresponsesurvey')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('Sense Emotional State Survey page navigation', () => {
        it('it should return status 200', (done) => {
            chai.request('http://localhost:5000')
                .get('/emotionalstatesurvey')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('Sense Survey Reports page navigation', () => {
        it('it should return status 200', (done) => {
            chai.request('http://localhost:5000')
                .get('/surveyreports')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('Sense Survey Reports page navigation (faculty view)', () => {
        it('it should return status 200', (done) => {
            chai.request('http://localhost:5000')
                .get('/instructorSearch')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('Sense Survey Reports page navigation (student view)', () => {
        it('it should return status 200', (done) => {
            chai.request('http://localhost:5000')
                .get('/respondentSearch')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('Sense FAQ page navigation', () => {
        it('it should return status 200', (done) => {
            chai.request('http://localhost:5000')
                .get('/faq')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});