#!/usr/bin/python3

# Create a sample collection
users = {'Hanas': 'active', 'Eleonore': 'inactive', 'Ronal': 'active'}

# Strategy: Iterate over a copy
for user, status in users.copy().items():
	if status == 'inactive':
		del users[user]

# Strategy: create a new collection
active_users = {}
for user, status in users.items():
	if status == 'active':
		active_users[user] = status

print(active_users)
