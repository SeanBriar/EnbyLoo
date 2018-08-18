class Location
  # connect to postgres
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'enbyloo_locations'})

  # INDEX
  def self.all
    results = DB.exec("SELECT * FROM locations;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "name" => result["name"],
        "address" => result["address"],
        "city" => result["city"],
        "state" => result["state"],
        "directions" => result["directions"],
        "ada" => result["ada"],
        "cleanliness" => result["cleanliness"].to_i,
        "staff_friendliness" => result["staff_friendliness"].to_i,
      }
    end
  end

  # SHOW
  def self.find(id)
    results = DB.exec("SELECT * FROM locations WHERE id=#{id};")
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "address" => results.first["address"],
      "city" => results.first["city"],
      "state" => results.first["state"],
      "directions" => results.first["directions"],
      "ada" => results.first["ada"],
      "cleanliness" => results.first["cleanliness"].to_i,
      "staff_friendliness" => results.first["staff_friendliness"].to_i,
    }
  end

  # CREATE
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness)
        VALUES ('#{opts["name"]}', '#{opts["address"]}', '#{opts["city"]}', '#{opts["state"]}', '#{opts[directions]}', #{opts["ada"]}, #{opts["cleanliness"]}, #{opts["staff_friendliness"]})
        RETURNING id, name, address, city, state, directions, ada, cleanliness, staff_friendliness;
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "address" => results.first["address"],
      "city" => results.first["city"],
      "state" => results.first["state"],
      "directions" => results.first["directions"],
      "ada" => results.first["ada"],
      "cleanliness" => results.first["cleanliness"].to_i,
      "staff_friendliness" => results.first["staff_friendliness"].to_i,
    }

  end


end
