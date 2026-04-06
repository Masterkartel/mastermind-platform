# Mastermind Commerce

This is the Medusa-powered commerce backend for Mastermind Electricals & Electronics.

## Purpose
This service is the single source of truth for:
- products
- prices
- stock
- carts
- orders
- customers
- payments

## Run locally
1. Create PostgreSQL and Redis
2. Copy `.env.template` to `.env`
3. Update secrets and URLs
4. Install dependencies
5. Run:
   - `pnpm dev`

## Deployment
Deploy this service to a Node.js host such as Railway.
Do not deploy it to Cloudflare Workers.
