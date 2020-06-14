import json

def reformat_json(self):
    with open("filtered_data.json", "r") as file:
        data = json.load(file)
        with open("filtered_data1.json", "w") as out:
            json.dump(data, out, indent=4)


if __name__ == "__main__":
    with open("filtered_data.json", "r") as file:
        arr = []
        real_json = {}
        line = file.readline()
        while line != "":
            jsonified = json.loads(line)
            arr.append(jsonified)
            line = file.readline()
        real_json["entries"] = arr
        with open("filtered_data1.json", "w") as out:
            json.dump(real_json, out, indent=4)