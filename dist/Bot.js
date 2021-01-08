"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const BotClient_1 = __importDefault(require("./client/BotClient"));
const client = new BotClient_1.default({ token: Config_1.token, owners: Config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF5QztBQUN6QyxtRUFBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQWMsSUFBSSxtQkFBUyxDQUFDLEVBQUUsS0FBSyxFQUFMLGNBQUssRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLENBQUMsQ0FBQztBQUMzRCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2tlbiwgb3duZXJzIH0gZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCBCb3RDbGllbnQgZnJvbSBcIi4vY2xpZW50L0JvdENsaWVudFwiO1xyXG5cclxuY29uc3QgY2xpZW50OiBCb3RDbGllbnQgPSBuZXcgQm90Q2xpZW50KHsgdG9rZW4sIG93bmVycyB9KTtcclxuY2xpZW50LnN0YXJ0KCk7Il19