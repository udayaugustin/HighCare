#!/bin/bash

# Build the application
npm run build

# Copy static files to web root (adjust path as needed for your server)
# cp -r dist/public/* /var/www/html/

echo "Build completed. Static files are in dist/public/"
echo "Copy these files to your web server root directory"