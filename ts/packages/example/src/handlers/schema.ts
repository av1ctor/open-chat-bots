import { Request, Response } from "express";

const emptyPermissions = {
  chat: [],
  community: [],
  message: [],
};

export default function schema(_: Request, res: Response) {
  res.status(200).json({
    autonomous_config: {
      sync_api_key: true,
      permissions: {
        message: ["Text", "Image", "P2pSwap", "VideoCall"],
        community: [
          "RemoveMembers",
          "ChangeRoles",
          "CreatePublicChannel",
          "CreatePrivateChannel",
        ],
        chat: ["ReadMessages"],
      },
    },
    description:
      "This is a demonstration bot which demonstrates a variety of different approaches and techniques that bot developers can use.",
    commands: [
      {
        name: "subscribe",
        default_role: "Owner",
        description: "Start pinging this context",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
        },
        params: [],
      },
      {
        name: "unsubscribe",
        default_role: "Owner",
        description: "Stop pinging this context",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
        },
        params: [],
      },
      {
        name: "numbers",
        default_role: "Admin",
        description: "Handle different types of numbers",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
        },
        params: [
          {
            name: "int_one",
            required: true,
            description: "First integer argument",
            placeholder: "Enter an integer",
            param_type: {
              IntegerParam: {
                min_value: -100,
                max_value: 100,
                choices: [],
              },
            },
          },
          {
            name: "dec_one",
            required: true,
            description: "First decimal argument",
            placeholder: "Enter a decimal",
            param_type: {
              DecimalParam: {
                min_value: -100,
                max_value: 100,
                choices: [],
              },
            },
          },
        ],
      },
      {
        name: "imagine",
        default_role: "Participant",
        description: "Generate an image with AI",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
          chat: ["ReadMessages"],
        },
        params: [
          {
            name: "prompt",
            required: true,
            description: "The prompt to send into the LLM",
            placeholder: "What do you want me to draw?",
            param_type: {
              StringParam: {
                min_length: 1,
                max_length: 1000,
                choices: [],
              },
            },
          },
        ],
      },
      {
        name: "prompt",
        default_role: "Participant",
        description: "Send a prompt to ChatGPT",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
        },
        params: [
          {
            name: "prompt",
            required: true,
            description: "The prompt to send into the LLM",
            placeholder: "How can I help you?",
            param_type: {
              StringParam: {
                min_length: 1,
                max_length: 1000,
                choices: [],
              },
            },
          },
        ],
      },
      {
        name: "poll",
        default_role: "Participant",
        description: "Send a random poll",
        permissions: {
          ...emptyPermissions,
          message: ["Poll"],
        },
        params: [],
      },
      {
        name: "news",
        default_role: "Participant",
        description: "Show a list of the current news headlines",
        placeholder: "Searching for the headlines ...",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
        },
        params: [],
      },
      {
        name: "image",
        default_role: "Participant",
        description: "Post an image message",
        permissions: {
          ...emptyPermissions,
          message: ["Image"],
        },
        params: [],
      },
      {
        name: "file",
        default_role: "Participant",
        description: "Post a file message",
        permissions: {
          ...emptyPermissions,
          message: ["File"],
        },
        params: [],
      },
      {
        name: "artist",
        default_role: "Participant",
        description: "Search for an artist on Spotify",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
        },
        params: [
          {
            name: "artist",
            required: true,
            description: "The artist to search for",
            placeholder: "Enter artist name",
            param_type: {
              StringParam: {
                min_length: 1,
                max_length: 100,
                choices: [],
              },
            },
          },
        ],
      },
      {
        name: "song",
        default_role: "Participant",
        description: "Search for a song on Spotify",
        placeholder: "Searching Spotify for your song ...",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
        },
        params: [
          {
            name: "song",
            required: true,
            description: "The song to search for",
            placeholder: "Enter song name",
            param_type: {
              StringParam: {
                min_length: 1,
                max_length: 100,
                choices: [],
              },
            },
          },
        ],
      },
      {
        name: "album",
        default_role: "Participant",
        description: "Search for an album on Spotify",
        permissions: {
          ...emptyPermissions,
          message: ["Text"],
        },
        params: [
          {
            name: "album",
            required: true,
            description: "The album to search for",
            placeholder: "Enter album name",
            param_type: {
              StringParam: {
                min_length: 1,
                max_length: 100,
                choices: [],
              },
            },
          },
        ],
      },
    ],
  });
}
