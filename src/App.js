import './App.css';
import Sidebar from './components/Sidebar';
import OutputRenderer from './components/OutputRenderer';
import { useEffect, useState } from 'react';

import GetCarbonHealthForm from './components/ActionComponents/GetCarbonHealthForm';
import GetAccessTokenForm from './components/ActionComponents/GetAccessTokenForm';
import GetWhiteLabelingForm from './components/ActionComponents/GetWhiteLabelingForm';
import UploadFileForm from './components/ActionComponents/UploadFileForm';
import UploadFileFromUrlForm from './components/ActionComponents/UploadFileFromUrlForm';
import UploadRawTextForm from './components/ActionComponents/UploadRawTextForm';
import DeleteFileForm from './components/ActionComponents/DeleteFileForm';
import GetRawFileForm from './components/ActionComponents/GetRawFileForm';
import GetParsedFileForm from './components/ActionComponents/GetParsedFileForm';
import GetUserFilesForm from './components/ActionComponents/GetUserFilesForm';
import CreateTagsForm from './components/ActionComponents/CreateTagsForm';
import DeleteTagsForm from './components/ActionComponents/DeleteTagsForm';
import ResyncFileForm from './components/ActionComponents/ResyncFileForm';

import GetEmbeddingsForm from './components/ActionComponents/GetEmbeddingsForm';
import GetChunksForm from './components/ActionComponents/GetChunksForm';

import GetConnectedDataSourcesForm from './components/ActionComponents/GetConnectedDataSourcesForm';
import RevokeDataSourceForm from './components/ActionComponents/RevokeDataSourceForm';

import WebscrapeForm from './components/ActionComponents/WebscrapeForm';
import SitemapForm from './components/ActionComponents/SitemapForm';
import FetchUrlsForm from './components/ActionComponents/FetchUrlsForm';
import SearchUrlsForm from './components/ActionComponents/SearchUrlsForm';
import FetchYoutubeTranscriptsForm from './components/ActionComponents/FetchYoutubeTranscriptsForm';

import FetchWebhooksForm from './components/ActionComponents/FetchWebhooksForm';
import AddWebhookUrlForm from './components/ActionComponents/AddWebhookUrlForm';
import DeleteWebhookUrlForm from './components/ActionComponents/DeleteWebhookUrlForm';

import LoginForm from './components/LoginForm';

const COMPONENT_MAP = {
  getCarbonHealth: GetCarbonHealthForm,
  getAccessToken: GetAccessTokenForm,
  getWhiteLabeling: GetWhiteLabelingForm,
  uploadFile: UploadFileForm,
  uploadFileFromUrl: UploadFileFromUrlForm,
  uploadRawText: UploadRawTextForm,
  deleteFile: DeleteFileForm,
  getRawFile: GetRawFileForm,
  getParsedFile: GetParsedFileForm,
  getUserFiles: GetUserFilesForm,
  createTags: CreateTagsForm,
  deleteTags: DeleteTagsForm,
  resyncFile: ResyncFileForm,
  getEmbeddings: GetEmbeddingsForm,
  getChunks: GetChunksForm,
  getConnectedDataSources: GetConnectedDataSourcesForm,
  revokeDataSource: RevokeDataSourceForm,
  webscrape: WebscrapeForm,
  sitemap: SitemapForm,
  fetchUrls: FetchUrlsForm,
  searchUrls: SearchUrlsForm,
  fetchYoutubeTranscripts: FetchYoutubeTranscriptsForm,
  fetchWebhooks: FetchWebhooksForm,
  addWebhookUrl: AddWebhookUrlForm,
  deleteWebhookUrl: DeleteWebhookUrlForm,
};

function App() {
  const [jsonResponse, setJsonResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [actionForm, setActionForm] = useState('getCarbonHealth');
  const [accessToken, setAccessToken] = useState('');

  const [apiKey, setApiKey] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function renderActiveComponent(action) {
    const ActiveComponent = COMPONENT_MAP[action];
    if (!ActiveComponent) return null;

    return (
      <div className="w-4/12 flex flex-col">
        {/* <h1 className="text-2xl font-bold text-center mb-4">{action}</h1> */}
        <ActiveComponent
          setJsonResponse={setJsonResponse}
          setIsLoading={setIsLoading}
          apiKey={apiKey}
          customerId={customerId}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-row ">
      {isLoggedIn ? (
        <>
          <Sidebar setActionForm={setActionForm} actionForm={actionForm} />
          {renderActiveComponent(actionForm)}
          <OutputRenderer data={jsonResponse} isLoading={isLoading} />
        </>
      ) : (
        <LoginForm
          setApiKey={setApiKey}
          setCustomerId={setCustomerId}
          setLoggedIn={setIsLoggedIn}
          apiKey={apiKey}
          customerId={customerId}
        />
      )}
    </div>
  );
}

export default App;
