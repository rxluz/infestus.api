import config from '../../../config/config';

const token = {
  valid: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWU1MjBkZTI1MDYzMTFkODhmNjYwZmMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA4MTg4MzgyfQ.JxPYLEF5JP7wPh_qOUluVIU893n4XabO2umvkFrg93g',
  invalid: 'invalid_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWRlNzNlYjcyYTA5MjljZjE5Yzg2MzgiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA3NzUwODkxfQ.8IE8O2OC2E0WCGmziXh5JtnQMQ9b6NEVVvRa71oWgJE_invalid',
  testing: config.testingKey
};

export default { token };
