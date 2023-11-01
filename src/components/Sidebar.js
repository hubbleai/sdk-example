import React from 'react';

const MenuData = [
  {
    label: 'Health',

    children: [
      {
        label: 'Get Carbon Health',
        action: 'getCarbonHealth',
        onClickHandler: () => {},
      },
    ],
  },
  {
    label: 'Auth',

    children: [
      {
        action: 'getAccessToken',
        label: 'Get Access Token',
        onClickHandler: () => {},
      },
      {
        action: 'getWhiteLabeling',
        label: 'Get White Labeling',
        onClickHandler: () => {},
      },
    ],
  },
  {
    label: 'Files',
    children: [
      {
        action: 'uploadFile',
        label: 'Upload File',
        onClickHandler: () => {},
      },
      {
        action: 'uploadFileFromUrl',
        label: 'Upload File from URL',
        onClickHandler: () => {},
      },
      {
        action: 'uploadRawText',
        label: 'Upload Raw Text',
        onClickHandler: () => {},
      },
      {
        action: 'deleteFile',
        label: 'Delete File',
        onClickHandler: () => {},
      },
      {
        action: 'getRawFile',
        label: 'Get Raw File',
        onClickHandler: () => {},
      },
      {
        action: 'getParsedFile',
        label: 'Get Parsed File',
        onClickHandler: () => {},
      },
      {
        action: 'getUserFiles',
        label: 'Get User Files',
        onClickHandler: () => {},
      },
      // {
      //   action: 'createTags',
      //   label: 'Create Tags',
      //   onClickHandler: () => {},
      // },
      // {
      //   action: 'deleteTags',
      //   label: 'Delete Tags',
      //   onClickHandler: () => {},
      // },
      {
        action: 'resyncFile',
        label: 'Resync File',
        onClickHandler: () => {},
      },
    ],
  },
  // {
  //   label: 'Embeddings',
  //   children: [
  //     {
  //       action: 'getEmbeddings',
  //       label: 'Get Embeddings',
  //       onClickHandler: () => {},
  //     },
  //     {
  //       action: 'getChunks',
  //       label: 'Get Chunks',
  //       onClickHandler: () => {},
  //     },
  //   ],
  // },
  // {
  //   label: 'Data Sources',
  //   children: [
  //     {
  //       action: 'getConnectedDataSources',
  //       label: 'Get Connected Data Sources',
  //       onClickHandler: () => {},
  //     },
  //     {
  //       action: 'revokeDataSource',
  //       label: 'Revoke Data Source',
  //       onClickHandler: () => {},
  //     },
  //   ],
  // },
  {
    label: 'Utilities',
    children: [
      {
        action: 'webscrape',
        label: 'Webscrape',
        onClickHandler: () => {},
      },
      {
        action: 'sitemap',
        label: 'Sitemap',
        onClickHandler: () => {},
      },
      {
        action: 'fetchUrls',
        label: 'Fetch URLs',
        onClickHandler: () => {},
      },
      {
        action: 'searchUrls',
        label: 'Search URLs',
        onClickHandler: () => {},
      },
      {
        action: 'fetchYoutubeTranscripts',
        label: 'Fetch Youtube Transcripts',
        onClickHandler: () => {},
      },
    ],
  },
  // {
  //   label: 'Webhooks',
  //   children: [
  //     {
  //       action: 'fetchWebhooks',
  //       label: 'Fetch Webhooks',
  //       onClickHandler: () => {},
  //     },
  //     {
  //       action: 'addWebhookUrl',
  //       label: 'Add Webhook URL',
  //       onClickHandler: () => {},
  //     },
  //     {
  //       action: 'deleteWebhookUrl',
  //       label: 'Delete Webhook URL',
  //       onClickHandler: () => {},
  //     },
  //   ],
  // },
];

const MenuItem = ({ label, isCurrent, onClickHandler = () => {} }) => {
  return (
    <div
      class={`flex items-center justify-start p-2 my-4 text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 rounded-md cursor-pointer space-x-2 ${
        isCurrent ? 'font-bold' : 'font-medium'
      }`}
      onClick={onClickHandler}
    >
      <span class="text-left">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#5e72e4"
            d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
          ></path>
        </svg>
      </span>
      <span class="mx- font-normal text-md">{label}</span>
    </div>
  );
};

const MenuGroup = ({ label, children, setActionForm, actionForm }) => {
  return (
    <div>
      <p class="w-full pb-2 mb-4  font-normal text-gray-300 border-b-2 border-gray-100 text-md">
        {label}
      </p>
      {children.map((child) => {
        return (
          <MenuItem
            label={child.label}
            isCurrent={child.action === actionForm}
            onClickHandler={() => {
              setActionForm(child.action);
            }}
          />
        );
      })}
    </div>
  );
};

const Sidebar = ({ actionForm, setActionForm }) => {
  return (
    <div class="relative bg-white dark:bg-gray-800 w-2/12">
      <div class="flex flex-col sm:flex-row sm:justify-around">
        <div class="h-screen w-72 overflow-y-auto">
          <nav class="px-6 mt-10">
            <div class="flex items-center justify-start mx-6 my-10">
              <span class="text-gray-600 dark:text-gray-300 ml-4 text-lg font-bold">
                Carbon Demo
              </span>
            </div>

            {MenuData.map((menuGroup) => {
              return (
                <MenuGroup
                  label={menuGroup.label}
                  children={menuGroup.children}
                  setActionForm={setActionForm}
                  actionForm={actionForm}
                />
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
