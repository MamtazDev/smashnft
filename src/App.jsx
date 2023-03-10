import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Fintech from "./pages/Fintech";
import Customers from "./pages/ecommerce/Customers";
import Orders from "./pages/ecommerce/Orders";
import Invoices from "./pages/ecommerce/Invoices";
import Shop from "./pages/ecommerce/Shop";
import Shop2 from "./pages/ecommerce/Shop2";
import Product from "./pages/ecommerce/Product";
import Cart from "./pages/ecommerce/Cart";
import Cart2 from "./pages/ecommerce/Cart2";
import Cart3 from "./pages/ecommerce/Cart3";
import Pay from "./pages/ecommerce/Pay";
import Campaigns from "./pages/Campaigns";
import UsersTabs from "./pages/community/UsersTabs";
import UsersTiles from "./pages/community/UsersTiles";
import Profile from "./pages/community/Profile";
import Feed from "./pages/community/Feed";
import Forum from "./pages/community/Forum";
import ForumPost from "./pages/community/ForumPost";
import Meetups from "./pages/community/Meetups";
import MeetupsPost from "./pages/community/MeetupsPost";
import CreditCards from "./pages/finance/CreditCards";
import Transactions from "./pages/finance/Transactions";
import TransactionDetails from "./pages/finance/TransactionDetails";
import JobListing from "./pages/job/JobListing";
import JobPost from "./pages/job/JobPost";
import CompanyProfile from "./pages/job/CompanyProfile";
import Messages from "./pages/Messages";
import TasksKanban from "./pages/tasks/TasksKanban";
import TasksList from "./pages/tasks/TasksList";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Account from "./pages/settings/Account";
import Notifications from "./pages/settings/Notifications";
import Apps from "./pages/settings/Apps";
import Plans from "./pages/settings/Plans";
import Billing from "./pages/settings/Billing";
import Feedback from "./pages/settings/Feedback";
import Changelog from "./pages/utility/Changelog";
import Roadmap from "./pages/utility/Roadmap";
import Faqs from "./pages/utility/Faqs";
import EmptyState from "./pages/utility/EmptyState";
import PageNotFound from "./pages/utility/PageNotFound";
import KnowledgeBase from "./pages/utility/KnowledgeBase";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Onboarding01 from "./pages/Onboarding01";
import Onboarding02 from "./pages/Onboarding02";
import Onboarding03 from "./pages/Onboarding03";
import Onboarding04 from "./pages/Onboarding04";
import ButtonPage from "./pages/component/ButtonPage";
import FormPage from "./pages/component/FormPage";
import DropdownPage from "./pages/component/DropdownPage";
import AlertPage from "./pages/component/AlertPage";
import ModalPage from "./pages/component/ModalPage";
import PaginationPage from "./pages/component/PaginationPage";
import TabsPage from "./pages/component/TabsPage";
import BreadcrumbPage from "./pages/component/BreadcrumbPage";
import BadgePage from "./pages/component/BadgePage";
import AvatarPage from "./pages/component/AvatarPage";
import TooltipPage from "./pages/component/TooltipPage";
import AccordionPage from "./pages/component/AccordionPage";
import IconsPage from "./pages/component/IconsPage";
import ChangePassword from "./pages/settings/ChangePassword";
import Commodities from "./pages/ecommerce/Commodities";
import Auction from "./pages/ecommerce/Auction";
import Transaction from "./pages/ecommerce/Transaction";
import BidHistory from "./pages/ecommerce/BidHistory";
import Royalty from "./pages/ecommerce/Royalty";
import RoyaltiesPaid from "./pages/ecommerce/RoyaltiesPaid";
import RoyaltiesStatistics from "./pages/ecommerce/RoyaltiesStatistics";
import OfficialProducts from "./pages/ecommerce/OfficialProducts";
import StartAuction from "./pages/ecommerce/StartAuction";
import AuctionRecords from "./pages/ecommerce/AuctionRecords";
import BidRecords from "./pages/ecommerce/BidRecords";
import AuctionTransaction from "./pages/ecommerce/AuctionTransaction";
import UserInformation from "./pages/community/UserInformation";
import CollectionRecords from "./pages/ecommerce/CollectionRecords";
import CommodityGrp from "./pages/ecommerce/CommodityGrp";
import InformationType from "./pages/ecommerce/InformationType";
import AddInformation from "./pages/ecommerce/AddInformation";
import ArticleTable from "./pages/ecommerce/ArticleTable";
import SupportType from "./pages/ecommerce/SupportType";
import AddSupport from "./pages/ecommerce/AddSupport";
import SupportRecords from "./pages/settings/SupportRecords";
import ContractTransaction from "./pages/ecommerce/ContractTransaction";
import ContractApplication from "./pages/ecommerce/ContractApplication";
import TransactionCurrency from "./pages/ecommerce/TransactionCurrency";
import LanguageManagement from "./pages/ecommerce/LanguageManagement";
import NotificationTypes from "./pages/ecommerce/NotificationTypes";
import SystemConfiguration from "./pages/ecommerce/SystemConfiguration";
import CarouselPictures from "./pages/ecommerce/CarouselPictures";
import MailConfiguration from "./pages/ecommerce/MailConfiguration";
import SupportWallet from "./pages/ecommerce/SupportWallet";
import Administrator from "./pages/ecommerce/Administrator";
import RoleManagement from "./pages/ecommerce/RoleManagement";
import MenuManagement from "./pages/ecommerce/MenuManagement";
import FileManagement from "./pages/ecommerce/FileManagement";
import ConfigurationManagement from "./pages/ecommerce/ConfigurationManagement";
import SupportRecordTable from "./pages/settings/SupportRecordTable";



function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
      <Route path="/login/home" element={<Shop />} />
      <Route path="/login/account" element={<Account />} />
      <Route path="/login/changePassword" element={<ChangePassword />} />


      
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/fintech" element={<Fintech />} />
        <Route path="/ecommerce/customers" element={<Customers />} />
        <Route path="/ecommerce/orders" element={<Orders />} />
        <Route path="/ecommerce/commodities" element={<Commodities />} />
        <Route path="/ecommerce/auction" element={<Auction />} />
        <Route path="/ecommerce/transaction" element={<Transaction />} />
        <Route path="/ecommerce/invoices" element={<Invoices />} />
      
        <Route path="/ecommerce/shop-2" element={<Shop2 />} />
        <Route path="/ecommerce/product" element={<Product />} />
        <Route path="/ecommerce/bid" element={<BidHistory />} />
        <Route path="/ecommerce/royalty" element={<Royalty />} />
        <Route path="/ecommerce/royaltyPaid" element={<RoyaltiesPaid />} />
        <Route path="/ecommerce/royalty-statistics" element={<RoyaltiesStatistics />} />
        <Route path="/ecommerce/official-products" element={<OfficialProducts />} />
        <Route path="/ecommerce/start-auction" element={<StartAuction />} />
        <Route path="/ecommerce/auction-record" element={<AuctionRecords />} />
        <Route path="/ecommerce/bid-record" element={<BidRecords />} />
        <Route path="/ecommerce/auction-transaction" element={<AuctionTransaction />} />
        <Route path="/ecommerce/collection-records" element={<CollectionRecords />} />
        <Route path="/ecommerce/commodity-grp" element={<CommodityGrp />} />
        <Route path="/ecommerce/information-type" element={<InformationType />} />
        <Route path="/ecommerce/add-info" element={<AddInformation />} />
        <Route path="/ecommerce/article" element={<ArticleTable />} />
        <Route path="/ecommerce/support-type" element={<SupportType />} />
        <Route path="/ecommerce/add-support" element={<AddSupport />} />
        <Route path="/ecommerce/contract-transaction" element={<ContractTransaction />} />
        <Route path="/ecommerce/contract-application" element={<ContractApplication />} />
        <Route path="/ecommerce/administrator" element={<Administrator />} />
        <Route path="/ecommerce/role-management" element={<RoleManagement />} />
        <Route path="/ecommerce/menu-management" element={<MenuManagement />} />
        <Route path="/ecommerce/file-management" element={<FileManagement />} />
        <Route path="/ecommerce/configuration-management" element={<ConfigurationManagement />} />
        <Route path="/ecommerce/transaction-currency" element={<TransactionCurrency />} />
        <Route path="/ecommerce/language-management" element={<LanguageManagement />} />
        <Route path="/ecommerce/notification-types" element={<NotificationTypes />} />
        <Route path="/ecommerce/system-configuration" element={<SystemConfiguration />} />
        <Route path="/ecommerce/carousel-pictures" element={<CarouselPictures />} />
        <Route path="/ecommerce/mail-configuration" element={<MailConfiguration />} />
       
        <Route path="/ecommerce/cart" element={<Cart />} />
        <Route path="/ecommerce/cart-2" element={<Cart2 />} />
        <Route path="/ecommerce/cart-3" element={<Cart3 />} />
        <Route path="/ecommerce/pay" element={<Pay />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/community/users-tabs" element={<UsersTabs />} />
        <Route path="/community/users-tiles" element={<UsersTiles />} />
        <Route path="/community/user-information" element={<UserInformation />} />
        <Route path="/community/profile" element={<Profile />} />
        <Route path="/community/feed" element={<Feed />} />
        <Route path="/community/forum" element={<Forum />} />
        <Route path="/community/forum-post" element={<ForumPost />} />
        <Route path="/community/meetups" element={<Meetups />} />
        <Route path="/community/meetups-post" element={<MeetupsPost />} />
        <Route path="/finance/cards" element={<CreditCards />} />
        <Route path="/finance/transactions" element={<Transactions />} />
        <Route
          path="/finance/transaction-details"
          element={<TransactionDetails />}
        />
        <Route path="/job/job-listing" element={<JobListing />} />
        <Route path="/job/job-post" element={<JobPost />} />
        <Route path="/job/company-profile" element={<CompanyProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/tasks/kanban" element={<TasksKanban />} />
        <Route path="/tasks/list" element={<TasksList />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/calendar" element={<Calendar />} />
      
        <Route path="/settings/support-records" element={<SupportRecords />} />
        <Route path="/settings/support-record-table" element={<SupportRecordTable />} />
        <Route path="/settings/support-wallet" element={<SupportWallet />} />
     
        <Route path="/settings/notifications" element={<Notifications />} />
        <Route path="/settings/apps" element={<Apps />} />
        <Route path="/settings/plans" element={<Plans />} />
        <Route path="/settings/billing" element={<Billing />} />
        <Route path="/settings/feedback" element={<Feedback />} />
        <Route path="/utility/changelog" element={<Changelog />} />
        <Route path="/utility/roadmap" element={<Roadmap />} />
        <Route path="/utility/faqs" element={<Faqs />} />
        <Route path="/utility/empty-state" element={<EmptyState />} />
        <Route path="/utility/404" element={<PageNotFound />} />
        <Route path="/utility/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/onboarding-01" element={<Onboarding01 />} />
        <Route path="/onboarding-02" element={<Onboarding02 />} />
        <Route path="/onboarding-03" element={<Onboarding03 />} />
        <Route path="/onboarding-04" element={<Onboarding04 />} />
        <Route path="/component/button" element={<ButtonPage />} />
        <Route path="/component/form" element={<FormPage />} />
        <Route path="/component/dropdown" element={<DropdownPage />} />
        <Route path="/component/alert" element={<AlertPage />} />
        <Route path="/component/modal" element={<ModalPage />} />
        <Route path="/component/pagination" element={<PaginationPage />} />
        <Route path="/component/tabs" element={<TabsPage />} />
        <Route path="/component/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/component/badge" element={<BadgePage />} />
        <Route path="/component/avatar" element={<AvatarPage />} />
        <Route path="/component/tooltip" element={<TooltipPage />} />
        <Route path="/component/accordion" element={<AccordionPage />} />
        <Route path="/component/icons" element={<IconsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
