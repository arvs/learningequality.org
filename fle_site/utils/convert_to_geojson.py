import json 

data = json.load(open('/Users/arvind/Downloads/locations.json'))

def make_dict(lat, lon):
  return {
  "type": "Feature",
  "properties": {
    "install_type": "ka_lite",
  },
  "geometry": {
    "coordinates": [lon, lat],
    "type": "Point"
  }}

json.dump(dict(features=[make_dict(x['latitude'], x['longitude']) for x in data], type="FeatureCollection"), open('/Users/arvind/Downloads/geo_locations.json', 'w'))