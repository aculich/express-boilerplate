if [ -z "$1" ]; then
    echo "Usage: ./setup-express-boilerplate <name>"
    exit 1
fi

# Download source
wget https://github.com/talmago/express-boilerplate/archive/master.zip

# Extract
unzip master.zip
mv express-boilerplate-master $1
rm -rf master.zip

# Change directory to the new project
cd $1

# Re-name README.md
echo "# $1" > README.md

# Re-name package.json
tmpfile=`mktemp /tmp/config.XXXXXXXXXX`
sed -e "s/express-boilerplate/$1/g" package.json > $tmpfile
mv $tmpfile package.json

# Install dependencies
npm install

# Remove setup script
rm -f bin/setup.sh
