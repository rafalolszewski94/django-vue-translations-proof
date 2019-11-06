# Requirements
- virtualenv created with Python 2.7 interpreter
- yarn installed globally

# Install
- `pip install -r requirements.txt`
- `./manage.py migrate` (sqlite3 is fine)
- `yarn`

# Run / reproduce
- `yarn watch`
- `./manage.py makemessages -d djangojs -l en -i "node_modules" --ext vue,js`
- `./manage.py makemessages -d djangojs -l pl -i "node_modules" --ext vue,js`
- `./manage.py makemessages -l pl -e html`
- `./manage.py makemessages -l en -e html`
- Translate your strings and save
- `./manage.py compilemessages`
- http://127.0.0.1:8000 - go and test
