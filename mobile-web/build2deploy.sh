# after finished coding, run this script to build and deploy

meteor build --architecture=os.linux.x86_64 ../build
scp ../build/mobile-web.tar.gz root@atom.plw.io:/home/meteor/build
ssh root@atom.plw.io "cd /home/meteor/script && ./deploy-build.sh"
