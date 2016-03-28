require 'json'
require 'faker'
require 'date'

def generate_users(count)
  users = {}
  count.times() do |i|
    name = Faker::Name.name
    gender = rand(2)
  	user = {
  		id: i,
  		gender: ["Female", "Male"][gender],
  		fullName: name,
  		email: Faker::Internet.free_email(name),
  		birthdate: (DateTime.now - 15*365 - rand(45*365)).strftime("%Y-%m-%d"),
  		address: Faker::Address.street_address,
  		avatarUrl: "https://randomuser.me/api/portraits/thumb/#{['women','men'][gender]}/#{rand(96)}.jpg"
  	}
  	users["a#{i}".to_sym] = user
  end
  return users
end

def generate_mails(count, from, to)
	date = DateTime.now
	mails = {}
	count.times() do |i|
		date = date - rand(100)
		mail = {
			id: Faker::Bitcoin.address,
			date: date.strftime("%Y-%m-%d"),
			from: from || Faker::Internet.email,
			to: to || Faker::Internet.email,
			subject: Faker::Lorem.sentence,
			body: Faker::Lorem.paragraph(rand(5))
		}
		mails[mail[:id]] = mail
	end
	return { items: mails, count: count }
end

h = { 
	:contacts => generate_users(50),
	'folder-list' => [{
			name: 'Inbox',
			url: 'inbox',
			from: true,
			to: false,
			reply: true,
			forward: true,
			spam: true,
			delete: true
		}, {
			name: 'Sent',
			url: 'sent',
			from: false,
			to: true,
			delete: true
		}, {
			name: 'Draft',
			url: 'draft',
			from: false,
			to: true,
			save: true,
			send: true,
			delete: true
		}, {
			name: 'Spam',
			url: 'spam',
			from: true,
			to: false,
			unspam: true,
			delete: true			
		}, {
			name: 'Trash',
			url: 'trash',
			from: true,
			to: true,
			delete: true,
			deletePermanently: true
		}],
	:folders => {
		inbox: generate_mails(100, nil, 'alexander@mail.ru'),
		sent: generate_mails(100, 'alexander@mail.ru', nil),
		draft: generate_mails(100, 'alexander@mail.ru', nil),
		spam: generate_mails(100, nil, 'alexander@mail.ru'),
		trash: generate_mails(100, nil, 'alexander@mail.ru')
	}
}

File.open('app_gen.json', 'w') { |f| f.write(h.to_json) }