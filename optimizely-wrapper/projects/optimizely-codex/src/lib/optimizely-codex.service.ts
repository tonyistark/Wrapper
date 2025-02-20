import { Injectable } from '@angular/core';
import * as optimizely from '@optimizely/optimizely-sdk';

@Injectable({
  providedIn: 'root'
})
export class OptimizelyCodexService {
  private optimizelyClient!: optimizely.Client;

  constructor() {
    const client = optimizely.createInstance({
      sdkKey: 'YOUR_SDK_KEY'
    });

    if (!client) {
      throw new Error('Failed to initialize Optimizely client');
    }

    this.optimizelyClient = client;

    // Start the Optimizely client
    this.optimizelyClient.onReady().then(() => {
      console.log('Optimizely client is ready');
    });
  }

  // Method to check if a feature is enabled
  isFeatureEnabled(featureKey: string, userId: string): boolean {
    return this.optimizelyClient.isFeatureEnabled(featureKey, userId);
  }

  // Method to get a variable value from a feature
  getFeatureVariableString(featureKey: string, variableKey: string, userId: string): string {
    return this.optimizelyClient.getFeatureVariableString(featureKey, variableKey, userId) ?? '';
  }
// Method to activate an experiment and get the variation
activateExperiment(experimentKey: string, userId: string): string {
  return this.optimizelyClient.activate(experimentKey, userId) ?? '';
}

// Method to track an event
trackEvent(eventKey: string, userId: string, eventTags?: Record<string, any>): void {
  this.optimizelyClient.track(eventKey, userId, eventTags);
}
}
