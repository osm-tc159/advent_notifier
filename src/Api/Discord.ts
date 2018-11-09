export class Discord {
  private webhooksUrl = PropertiesService
    .getScriptProperties()
    .getProperty("DISCORD_WEBHOOKS_URL");

  constructor(webhooksUrl?: string) {
    if (webhooksUrl) {
      this.webhooksUrl = webhooksUrl;
    }
  }

  public postMessage(payload: object) {
    UrlFetchApp.fetch(this.webhooksUrl, {
      method: "post",
      payload: JSON.stringify(payload),
    });
  }
}
