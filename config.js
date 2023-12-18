/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie: "",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
  ],
  Cookiecounter: 1,
  CookieIndex: 0,
  ProxyPassword: "123",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
