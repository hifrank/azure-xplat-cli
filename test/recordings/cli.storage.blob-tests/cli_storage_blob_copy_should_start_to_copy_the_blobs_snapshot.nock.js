// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:29 GMT',
  etag: '"0x8D37FCCD42C9928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b2220ed5-0001-0003-57b5-b19500000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-05-19T10:03:37.9480681Z',
  date: 'Thu, 19 May 2016 10:03:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:29 GMT',
  etag: '"0x8D37FCCD42C9928"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b2220ed5-0001-0003-57b5-b19500000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-05-19T10:03:37.9480681Z',
  date: 'Thu, 19 May 2016 10:03:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Thu, 19 May 2016 10:03:27 GMT',
  etag: '"0x8D37FCCD2F17409"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bed3fd2b-0001-0027-7cb5-b10c4e000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Thu, 19 May 2016 10:03:27 GMT',
  etag: '"0x8D37FCCD2F17409"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bed3fd2b-0001-0027-7cb5-b10c4e000000',
  'x-ms-version': '2015-04-05',
  date: 'Thu, 19 May 2016 10:03:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:38 GMT',
  etag: '"0x8D37FCCD9835998"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '34d734a9-0001-000e-2db5-b17a0c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': '7a0383bc-379d-4532-8738-a474454252f3',
  'x-ms-copy-status': 'success',
  date: 'Thu, 19 May 2016 10:03:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:03:38 GMT',
  etag: '"0x8D37FCCD9835998"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '34d734a9-0001-000e-2db5-b17a0c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': '7a0383bc-379d-4532-8738-a474454252f3',
  'x-ms-copy-status': 'success',
  date: 'Thu, 19 May 2016 10:03:38 GMT',
  connection: 'close' });
 return result; }]];