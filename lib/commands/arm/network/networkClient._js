var __ = require('underscore');

var profile = require('../../../util/profile');

// TODO: replace this once we have arm 'azure-sdk-for-node' publicly available.
var NetWorkResourceProviderClient = require('./../armsdk/networkResourceProviderClient');
var SubnetCRUD = require('./subnetCRUD');
var LoadBalancerCRUD = require('./loadbalancerCRUD');
var PublicipCRUD = require('./publicipCRUD');
var NicCRUD = require('./nicCRUD');

function NetworkClient(cli, subscription) {
  this.cli = cli;
  this.subscription = subscription;
  // TODO: This baseUri will be removed once we have arm 'azure-sdk-for-node' publicly available.
  this.azureServiceBaseUri = 'https://management.azure.com/';
}

__.extend(NetworkClient.prototype, {
  listSubnets: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;

    var subnetCRUD = new SubnetCRUD(this.cli, networkResourceProviderClient);
    subnetCRUD.list(resourceGroupName, params, _);
  },

  showSubnet: function (resourceGroupName, name, subnetName, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;
    params.subnetName = subnetName;

    var subnetCRUD = new SubnetCRUD(this.cli, networkResourceProviderClient);
    subnetCRUD.show(resourceGroupName, params, _);
  },

  listLoadBalancers: function (resourceGroupName, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};

    var loadbalancerCRUD = new LoadBalancerCRUD(this.cli, networkResourceProviderClient);
    loadbalancerCRUD.list(resourceGroupName, params, _);
  },

  showLoadBalancer: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;

    var loadbalancerCRUD = new LoadBalancerCRUD(this.cli, networkResourceProviderClient);
    loadbalancerCRUD.show(resourceGroupName, params, _);
  },

  deleteLoadBalancer: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;
    params.quiet = options.quiet;

    var loadbalancerCRUD = new LoadBalancerCRUD(this.cli, networkResourceProviderClient);
    loadbalancerCRUD.delete(resourceGroupName, params, _);
  },

  exportLoadBalancer: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;
    params.filepath = options.filepath;

    var loadbalancerCRUD = new LoadBalancerCRUD(this.cli, networkResourceProviderClient);
    loadbalancerCRUD.export(resourceGroupName, params, _);
  },

  importLoadBalancer: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;
    params.filepath = options.filepath;

    var loadbalancerCRUD = new LoadBalancerCRUD(this.cli, networkResourceProviderClient);
    loadbalancerCRUD.import(resourceGroupName, params, _);
  },

  createPublicIP: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;
    params.domainName = options.domainName;
    params.location = options.location;
    params.idletimeout = options.idletimeout;
    params.allocationMethod = options.allocationMethod;

    var publicipCRUD = new PublicipCRUD(this.cli, networkResourceProviderClient);
    publicipCRUD.create(resourceGroupName, params, _);
  },

  showPublicIP: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;

    var publicipCRUD = new PublicipCRUD(this.cli, networkResourceProviderClient);
    publicipCRUD.show(resourceGroupName, params, _);
  },

  deletePublicIP: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;
    params.quiet = options.quiet;

    var publicipCRUD = new PublicipCRUD(this.cli, networkResourceProviderClient);
    publicipCRUD.delete(resourceGroupName, params, _);
  },

  listPublicIPs: function (resourceGroupName, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};

    var publicipCRUD = new PublicipCRUD(this.cli, networkResourceProviderClient);
    publicipCRUD.list(resourceGroupName, params, _);
  },

  listNICs: function (resourceGroupName, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};

    var nicCRUD = new NicCRUD(this.cli, networkResourceProviderClient);
    nicCRUD.list(resourceGroupName, params, _);
  },

  showNIC: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;

    var nicCRUD = new NicCRUD(this.cli, networkResourceProviderClient);
    nicCRUD.show(resourceGroupName, params, _);
  },

  deleteNIC: function (resourceGroupName, name, options, _) {
    var subscription = profile.current.getSubscription(this.subscription);
    var networkResourceProviderClient = this._getSubscriptionNetworkClient(subscription);
    var params = {};
    params.name = name;
    params.quiet = options.quiet;

    var nicCRUD = new NicCRUD(this.cli, networkResourceProviderClient);
    nicCRUD.delete(resourceGroupName, params, _);
  },

  _getSubscriptionNetworkClient: function (subscription) {
    return subscription.createClient(this._createNetworkResourceProviderClient, this.azureServiceBaseUri);
  },

  _createNetworkResourceProviderClient: function (credentails, baseUri) {
    return new NetWorkResourceProviderClient.NetworkResourceProviderClient(credentails, baseUri);
  }
});

module.exports = NetworkClient;