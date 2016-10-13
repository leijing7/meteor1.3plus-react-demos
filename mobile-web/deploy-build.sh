# put this to /home/meteor/script dir on server

cd ../build
rm -rf bundle
tar xvf mobile-web.tar.gz
cd bundle
(cd programs/server && cnpm install)
pm2 restart app-1
