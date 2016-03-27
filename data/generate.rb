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

def generate_mails(start, count, from, to)
	mails = {}
	count.times() do |i|
		mail = {
			id: start + i,
			from: from || Faker::Internet.email,
			to: to || Faker::Internet.email,
			subject: Faker::Lorem.sentence,
			body: Faker::Lorem.paragraph(rand(5))
		}
		mails["a#{i}".to_sym] = mail
	end
	return { items: mails, count: count }
end

h = { 
	:contacts => generate_users(50),
	'folder-names' => [ "Inbox", "Sent", "Draft", "Spam", "Trash" ],
	:folders => {
		inbox: generate_mails(0, 5, nil, 'alexander@mail.ru'),
		sent: generate_mails(5, 4, 'alexander@mail.ru', nil),
		draft: generate_mails(9, 3, 'alexander@mail.ru', nil),
		spam: generate_mails(12, 2, nil, 'alexander@mail.ru'),
		trash: generate_mails(14, 1, nil, 'alexander@mail.ru')
	}
}

File.open('app_gen.json', 'w') { |f| f.write(h.to_json) }