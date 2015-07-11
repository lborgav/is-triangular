'use strict';
var assert = require('assert');
var isTriangular = require('./');

it('should return true because 1 is a triangular number', function () {
  assert.strictEqual(isTriangular(1), true);
});

it('should return false because 2 is not a triangular number', function () {
  assert.strictEqual(isTriangular(2), false);
});

it('should return true because 3 is a triangular number', function () {
  assert.strictEqual(isTriangular(3), true);
});

it('should return false because 4 is not a triangular number', function () {
  assert.strictEqual(isTriangular(4), false);
});

it('should return true because 10 is a triangular number', function () {
  assert.strictEqual(isTriangular(10), true);
});
