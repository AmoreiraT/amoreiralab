export enum Url {
  // Security
  auth = 'api/Security/token',
  portalToken = 'api/Security/tokenPortal',

  // Config
  benefits = 'api/Config/benefits',
  faq = 'api/Config/faq',
  faqPortal = 'api/Corporate/faq',
  privacyPolicy = 'api/Config/privacypolicy',
  termsUso = 'api/Config/termsuse',

  // Authorization
  travelNotification = 'api/Authorization/travelNotification/',
  travelNotificationNew = 'api/Authorization/travelNotificationNew/',
  travelNotificationEdit = 'api/Authorization/travelNotificationEdit/',
  travelNotificationDelete = 'api/Authorization/travelNotificationDelete/',

  // Account
  cardholderDataByCard = 'api/Account/accountDataByCard/',
  create = 'api/Account/create',
  createNewCardholder = 'api/Account/newcardholder_web/',
  listAccounts = 'api/Account/listAccounts',
  // listCardHolderByCnpj = 'api/Account/listCardHolderByCnpj_web/',
  listCardHolderByCompId = 'api/Account/listCardHolderByCompId_web/',
  listCardHolderByPorCompId = 'api/Account/listCardHolderByPorCompId_web/',
  unlockUser = 'api/Account/unlockUser',

  // Card
  blockCardTransit = 'api/Cards/blockCardTransit_web/',
  blockVoluntary = 'api/Cards/blockVoluntary_web/',
  lostOrStolen = 'api/Cards/lostOrStolen/',
  lostOrStolenNewCard = 'api/Cards/lostOrStolenNewCard/',
  reissueDamage = 'api/Cards/reissueDamage/',
  avisoRecebimento = 'api/Cards/avisoRecebimento/',
  unblockCard = 'api/Cards/unlock/',

  // Invoice
  listByCard = 'api/Invoice/listByCard/',
  detailByCard = 'api/Invoice/detailByCard/',
  summaryByCard = 'api/Invoice/summaryByCard/',
  pdfIdPortador = 'api/Invoice/pdfIdPortador/',

  // Corporate
  getCardHolderData = 'api/Corporate/getCardHolderData/',
  listCnpj = 'api/Corporate/listCnpj',
  cancelCard = 'api/Corporate/cancelCard/',
  changeCompanyData = 'api/Corporate/changeCompanyData',
  changeCaholderData = 'api/Corporate/changeCaholderData/',
  listCompaniesByCnpj = 'api/Corporate/listCompaniesByCnpj',
  listAllCardHolders = 'api/Corporate/listAllCardHolders',
  newCardHolder = 'api/Corporate/newCardHolder',
  listCompanieCentralInvoice = 'api/Corporate/listCompanieCentralInvoice',
  listCompanieIndividualInvoice = 'api/Corporate/listCompanieIndividualInvoice',
  companyInvoiceView = 'api/Corporate/companyInvoiceView',
  downloadInvoicePdf = 'api/Corporate/downloadInvoicePdf',
  requestPortalSMS = 'api/Corporate/requestPortalSMS',
  setLimitCreditCard = 'api/Corporate/setLimitCreditCard/',
  cardReissuance = 'api/Corporate/cardReissuance/',
  lostOrStolenCorporate = 'api/Corporate/lostOrStolen/',
  lostOrStolenNewCardCorporate = 'api/Corporate/lostOrStolenNewCard/',
  portalLogout = 'api/Corporate/logout/',
  getPortalUserInfo = 'api/Corporate/getPortalUserInfo',
  setAcceptedTerms = 'api/Corporate/setAcceptedTerms',

  requestRefreshToken = 'api/Callback/refreshToken',
}
