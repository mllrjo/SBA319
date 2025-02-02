
// DEPENDENCIES
import express from "express";
import mongoose from "mongoose";

import nominations from "./models/nominations.mjs";
import nomination_status from "./models/nomination_status.mjs";
import nomination_comments from "./models/nomination_comments.mjs";
import dotenv from 'dotenv';
dotenv.config();

const PORT = 3001;
const app = express();

await mongoose.connect(process.env.ATLAS_URI);

const nominationsData = [
    { "title": "Secretary of State", "nominee": "Marco Rubio" },
    { "title": "Secretary of Defense", "nominee": "Pete Hegseth" },
  { "title": "Secretary of Homeland Security", "nominee": "Kristi Noem" },
  { "title": "Secretary of the Interior", "nominee": "Doug Burgum" },
  { "title": "Secretary of Transportation", "nominee": "Sean Duffy" },
  { "title": "Administrator of the Environmental Protection Agency", "nominee": "Lee Zeldin" },
  { "title": "Secretary of the Treasury", "nominee": "Scott Bessent" },
  { "title": "Attorney General", "nominee": "Matt Gaetz" },
  { "title": "Administrator of the Drug Enforcement Administration", "nominee": "Chad Chronister" },
  { "title": "Co-Chair of the Department of Government Efficiency", "nominee": "Vivek Ramaswamy" },
  { "title": "Secretary of Veterans Affairs", "nominee": "Doug Collins" },
  { "title": "Ambassador to the United Nations", "nominee": "Elise Stefanik" },
  { "title": "Director of the Office of Management and Budget", "nominee": "Russ Vought" },
  { "title": "Secretary of Agriculture", "nominee": "Brooke Rollins" },
  { "title": "Director of National Intelligence", "nominee": "Tulsi Gabbard" },
  { "title": "Director of the Federal Bureau of Investigation", "nominee": "Kash Patel" },
  { "title": "Secretary of Health and Human Services", "nominee": "Robert F. Kennedy Jr." }
];

try {
  const result = await nominations.insertMany(nominationsData);
  console.log(`${result.length} documents were inserted`);
} catch (error) {
  console.error('Error inserting documents:', error);
}

const nomination_statusData = [
    { "nominee": "Marco Rubio", "status": "Confirmed", "date": "2025-01-27" },
    { "nominee": "Pete Hegseth", "status": "Confirmed", "date": "2025-01-27" },
    { "nominee": "Kristi Noem", "status": "Confirmed", "date": "2025-01-27" },
    { "nominee": "Doug Burgum", "status": "Confirmed", "date": "2025-01-27" },
    { "nominee": "Sean Duffy", "status": "Confirmed", "date": "2025-01-28" },
    { "nominee": "Lee Zeldin", "status": "Confirmed", "date": "2025-01-27" },
    { "nominee": "Scott Bessent", "status": "Confirmed", "date": "2025-01-27" },
    { "nominee": "Matt Gaetz", "status": "Withdrawn", "date": "2024-11-21" },
    { "nominee": "Chad Chronister", "status": "Withdrawn", "date": "2024-12-03" },
    { "nominee": "Vivek Ramaswamy", "status": "Withdrawn", "date": "2025-01-20" },
    { "nominee": "Doug Collins", "status": "Pending Confirmation" },
    { "nominee": "Elise Stefanik", "status": "Pending Confirmation" },
    { "nominee": "Russ Vought", "status": "Pending Confirmation" },
    { "nominee": "Brooke Rollins", "status": "Pending Confirmation" },
    { "nominee": "Tulsi Gabbard", "status": "Pending Confirmation" },
    { "nominee": "Kash Patel", "status": "Pending Confirmation" },
    { "nominee": "Robert F. Kennedy Jr.", "status": "Pending Confirmation" }
]

try {
    const result = await nomination_status.insertMany(nomination_statusData);
    console.log(`${result.length} documents were inserted`);
} catch (error) {
    console.error('Error inserting documents:', error);
}
const nomination_commentsData = [
    { "nominee": "Elon Musk", "personal_relationship_to_trump": "Advisor; appointed as Co-Leader, Department of Government Efficiency", "is_billionaire": true, "estimated_net_worth_in_USD": "433,000,000,000", "faced_allegations_of_misconduct": false, "notes": "CEO of Tesla and SpaceX; wealth primarily from technology ventures." },
    { "nominee": "Scott Bessent", "personal_relationship_to_trump": "Political supporter; appointed as Secretary of the Treasury", "is_billionaire": true, "estimated_net_worth_in_USD": "Not specified", "faced_allegations_of_misconduct": false, "notes": "Former chief investment officer for George Soros; founder of Key Square Group." },
    { "nominee": "Howard Lutnick", "personal_relationship_to_trump": "Political ally; appointed as Secretary of Commerce", "is_billionaire": true, "estimated_net_worth_in_USD": "2,200,000,000", "faced_allegations_of_misconduct": false, "notes": "CEO of Cantor Fitzgerald; significant wealth from financial services." },
    { "nominee": "Kelly Loeffler", "personal_relationship_to_trump": "Political ally; appointed as Administrator of the Small Business Administration", "is_billionaire": true, "estimated_net_worth_in_USD": "Married to a billionaire", "faced_allegations_of_misconduct": false, "notes": "Former U.S. Senator; spouse is Jeffrey Sprecher, CEO of Intercontinental Exchange." },
    { "nominee": "Jared Isaacman", "personal_relationship_to_trump": "Political ally; appointed as NASA Administrator", "is_billionaire": true, "estimated_net_worth_in_USD": "1,700,000,000", "faced_allegations_of_misconduct": false, "notes": "Founder of Shift4 Payments; wealth from payment processing industry." },
    { "nominee": "Doug Burgum", "personal_relationship_to_trump": "Political supporter; appointed as Secretary of the Interior", "is_billionaire": false, "estimated_net_worth_in_USD": "Over 100,000,000", "faced_allegations_of_misconduct": false, "notes": "Governor of North Dakota; wealth from software industry." },
    { "nominee": "Robert F. Kennedy Jr.", "personal_relationship_to_trump": "Political ally; appointed as Secretary of Health and Human Services", "is_billionaire": false, "estimated_net_worth_in_USD": "15,000,000", "faced_allegations_of_misconduct": true, "notes": "Environmental lawyer and activist; member of the Kennedy family." },
    { "nominee": "Mehmet Oz", "personal_relationship_to_trump": "Political ally; appointed as Administrator of the Centers for Medicare and Medicaid Services", "is_billionaire": false, "estimated_net_worth_in_USD": "100,000,000 - 315,000,000", "faced_allegations_of_misconduct": false, "notes": "Cardiothoracic surgeon and television personality." },
    { "nominee": "Vivek Ramaswamy", "personal_relationship_to_trump": "Political ally; appointed as Co-Leader, Department of Government Efficiency", "is_billionaire": true, "estimated_net_worth_in_USD": "1,100,000,000", "faced_allegations_of_misconduct": false, "notes": "Entrepreneur in the biotechnology sector." },
    { "nominee": "Linda McMahon", "personal_relationship_to_trump": "Political ally; appointed as Secretary of Education", "is_billionaire": false, "estimated_net_worth_in_USD": "Not specified", "faced_allegations_of_misconduct": false, "notes": "Co-founder of World Wrestling Entertainment (WWE)." },
    { "nominee": "Marco Rubio", "personal_relationship_to_trump": "Former political rival turned ally; appointed as Secretary of State", "is_billionaire": false, "estimated_net_worth_in_USD": "Over 1,000,000", "faced_allegations_of_misconduct": false, "notes": "U.S. Senator from Florida." },
    { "nominee": "Pete Hegseth", "personal_relationship_to_trump": "Political ally; appointed as Secretary of Defense", "is_billionaire": false, "estimated_net_worth_in_USD": "Not specified", "faced_allegations_of_misconduct": true, "notes": "Former U.S. Army officer and television host." },
    { "nominee": "Kristi Noem", "personal_relationship_to_trump": "Political ally; appointed as Secretary of Homeland Security", "is_billionaire": false, "estimated_net_worth_in_USD": "5,000,000", "faced_allegations_of_misconduct": false, "notes": "Governor of South Dakota." },
    { "nominee": "Sean Duffy", "personal_relationship_to_trump": "Political ally; appointed as Secretary of Transportation", "is_billionaire": false, "estimated_net_worth_in_USD": "Not specified", "faced_allegations_of_misconduct": false, "notes": "Former U.S. Representative and television personality." },
    { "nominee": "Lee Zeldin", "personal_relationship_to_trump": "Political ally; appointed as Administrator of the Environmental Protection Agency", "is_billionaire": false, "estimated_net_worth_in_USD": "Not specified", "faced_allegations_of_misconduct": false, "notes": "Former U.S. Representative from New York." },
    { "nominee": "Pam Bondi", "personal_relationship_to_trump": "Former personal attorney; appointed as Attorney General", "is_billionaire": false, "estimated_net_worth_in_USD": "Not specified", "faced_allegations_of_misconduct": true, "notes": "Former Florida Attorney General; served on Trump's impeachment defense team." },
    { "nominee": "Kash Patel", "personal_relationship_to_trump": "Former National Security Council official and chief of staff to the acting U.S. Secretary of Defense; close associate and loyalist", "is_billionaire": false, "estimated_net_worth_in_USD": "Not specified", "faced_allegations_of_misconduct": true, "notes": "Nominated as FBI Director; faced scrutiny for promoting conspiracy theories and his close association with Trump." }
]

try {
  const result = await nomination_comments.insertMany(nomination_commentsData);
  console.log(`${result.length} documents were inserted`);
} catch (error) {
  console.error('Error inserting documents:', error);
}
