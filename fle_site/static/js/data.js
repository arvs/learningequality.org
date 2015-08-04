var data1 = '158 212 0.93 1.06 233 237 95,1,3 72 7 63 11 77 19 112 21 100 21 53 22 10,176 198 1.07 1.1 229 217 198,1,5 7,180 193 1.2 1.51 233 236 94,1,4 10 16 9 31 9 44 10 54 9 66 10 79 9 88 9 104 7 113 7 123 6 140 5 156 6 165 6 181 6 195 7 204 7 213 8 222 9 226 21 207 7 198 5,216 247 1.76 1.82 231 238 94,1,7 11 6 5 5 36 8 57,247 254 1.85 1.94 228 237 98,1,14 14 23 8 25 5 15 12 14 46 40 35 28 5,311 251 1.95 2.05 231 236 99,1,28 10 22 9 5 34 32 36 48 17 21 6,484 252 2.12 2.2 217 223 84,2,6 5 14 6,4 14 16 14,525 189 8.86 9.0 236 239 95,1,4 26 16 25 19 19 23 41 33 81 37 103 41 92 44 28 42 7,565 178 9.08 9.32 234 237 94,1,17 10 36 9 56 8 82 6 99 7 121 8 136 8 153 8 166 7 179 5 191 6 196 6 200 7 203 22 167 6,205 304 9.66 9.83 56 165 174,2,21 18 13 18 7 21 3 20 48 16 6 34 30 32 107 23 143 19,21 18 13 18 7 21 3 20 48 16 91 13 143 5 147 7 98 13 143 19,595 233 9.92 9.98 56 167 177,1,4 12 5 5 5 13 10 34,612 233 9.99 10.08 56 165 174,1,9 15 12 10 6 18 9 36 33 26 15 6 8 9,671 243 10.15 10.29 52 177 192,1,5 7 7 11 9 8 4 6 8 11 12 7 7 8 13 9 7 6,707 233 10.3 10.35 59 169 177,1,4 8 4 3 5 13 8 33,728 227 10.36 10.46 53 169 179,1,4 21 16 10 13 8 5 19 10 38 35 26 23 8,852 237 11.31 11.39 54 162 167,2,6 6 5 6 19 5,7 12 19 12,943 214 11.48 11.65 55 167 174,2,5 24 2 18 4 12 6 30 9 50 2 21,34 23 44 11 46 8 33 20 31 45 61 47 74 32 46 5,389 439 13.24 13.29 54 169 176,1,3 6 7 41 10 54,417 445 13.32 13.4 55 164 174,1,5 11 13 4 4 25 20 44 39 27 27 9,455 403 13.47 13.55 57 168 176,1,9 29 4 12 16 5 20 14 10 26 18 27,516 453 13.6 13.69 54 160 166,2,9 8 4 6 0 5 14 6,10 16,589 438 13.72 13.77 50 166 172,1,4 4 7 30 11 45,596 435 13.78 13.87 53 163 170,2,0 33 4 48,16 23 21 10 15 28 27 43 46 23 26 5,662 451 13.9 13.98 61 172 181,1,6 6 3 9 9 10 7 6 14 7 6 6,707 438 14.02 14.07 53 168 176,1,11 21 4 5 5 9 11 34 16 42,730 436 14.09 14.18 55 166 175,1,6 19 13 5 7 13 7 33 27 34 38 17 14 5,809 442 14.2 14.29 57 163 167,2,12 7 6 7 15 5 24 6,11 14 20 13 27 8,883 420 14.41 14.46 56 164 168,1,6 14 13 41 14 48,894 423 14.47 14.56 55 164 170,2,2 38 3 45,15 25 28 5 19 16 29 39 49 33 37 5,970 416 14.57 14.66 59 164 171,1,21 8 1 21 18 38 40 28 18 5 7 16 4 21';

var data2 = '360 239 1.85 1.88 180 206 87,1,5 11 5 8 10 6 14 9 3 12,272 95 2.57 2.63 152 169 67,1,3 148 3 129 5 93 7 80 10 59 18 35 28 14,304 82 2.68 2.7 164 190 72,1,9 8 3 7 6 5 10 7,411 65 2.73 2.76 172 198 67,1,4 4 6 10,404 47 2.77 2.8 172 204 68,1,5 9 7 6 15 9 5 9,395 81 3.19 3.26 158 180 79,1,3 163 4 161 13 148 29 124 43 104 64 81 81 62 100 44 115 31 129 20 143 10 152 4,552 69 3.3 3.33 185 214 72,1,6 7 4 4 9 13,451 52 3.38 3.43 154 178 67,1,10 8 35 5 58 5 70 6 84 6,543 52 3.45 3.49 180 206 75,1,3 8 4 13 5 9 4 4 6 6 11 11 6 15,727 40 3.59 3.62 175 203 75,1,3 14 6 10 8 6 20 11 3 8,663 91 3.84 3.89 157 183 68,1,4 8 7 19 12 40 17 71 18 85 18 105 17 122,680 225 3.95 3.98 177 204 95,1,2 5,767 252 4.33 4.36 172 192 82,1,5 8,762 231 4.4 4.44 176 205 80,1,2 10 3 7 13 10 1 10,588 280 4.67 4.77 166 193 74,1,94 9 93 6 93 8 96 22 99 36 101 52 101 62 99 78 92 98 86 110 77 127 67 143 54 158 46 166 33 178 18 188 7 196 0 201,571 479 4.88 4.91 179 207 86,1,9 5 5 13 7 13 5 13,565 492 5.05 5.07 170 196 79,1,6 9,558 473 5.09 5.12 175 201 66,1,5 10 5 4 12 7 5 7,595 279 5.86 5.93 168 193 76,1,44 4 45 13 43 23 39 40 34 54 27 67 16 81 11 86 3 96,580 379 5.94 5.97 169 200 73,1,7 9 6 4 4 13 8 10,629 388 6.03 6.06 172 200 75,1,6 11 3 10 5 5 10 6 7 3,995 218 6.49 6.55 174 207 68,1,9 6 10 12 12 32 12 26 10 16 5 14 6 6 14 11,760 91 6.61 6.69 153 174 77,1,11 8 25 15 39 21 54 30 68 38 82 47 96 58 108 69 118 80 130 93 136 100,897 197 6.7 6.73 179 206 77,1,8 7 6 5 3 4 7 8 9 12 11 7 5 7,884 217 6.89 6.92 54 150 155,1,5 3 5 18 11 45,908 194 6.93 6.98 159 168 158,1,8 10 47 6 98 4 113 4 114 11 114 31 115 65,915 266 7.0 7.03 55 138 144,1,21 6 77 4,942 286 7.44 7.65 58 154 159,3,3 13 5 19 8 18 11 12 15 22 23 8 19 4 19 16 21 20 16 17 24 16 30 8 28 11 32 22,35 22 42 14 42 18 49 20 50 5 49 14 52 21 50 15 57 12 61 19,70 10 69 16 78 15 75 10 76 13 84 12 87 20 95 10 96 13 102 15,773 47 7.79 7.91 146 155 150,1,177 139 177 130 178 114 175 97 170 85 167 75 157 61 147 48 139 38 126 28 116 23 101 17 91 13 79 11 63 8 52 6 41 5 28 5 20 7 14 9 5 12 1 14,763 48 8.01 8.03 57 157 161,1,5 6 4 3 8 14 12 21,869 30 8.15 8.2 55 150 155,1,19 23 25 22 15 25 4 17 6 10 16 5 25 6 31 14 27 24,739 287 9.18 9.28 181 35 182,1,9 14 15 27 22 44 27 54 35 78 39 92 45 111 49 130 51 141 56 164 58 181 61 199 63 211,798 516 9.29 9.31 217 39 216,1,7 6 9 9,621 421 9.39 9.47 181 184 183,1,13 7 27 14 39 21 63 38 75 45 89 56 101 66 113 76 121 83 127 90,886 559 9.68 9.7 202 36 204,1,5 11,977 324 10.64 10.75 53 135 137,1,2 164 9 148 15 133 19 115 22 100 22 84 20 68 18 55 15 44 14 30 14 19 12 8 9 2,968 307 10.81 10.84 52 157 168,1,9 10 7 12 10 9 18 5,996 335 10.89 10.95 53 149 154,1,24 16 21 22 17 24 9 18 10 10 17 6 24 6 30 11 31 16 23 23 11 22,294 303 11.57 11.67 200 208 100,1,150 99 137 101 133 101 120 98 109 94 100 91 85 85 72 77 61 71 49 63 36 52 26 42 19 33 12 22 8 14 5 8 3 1,287 279 11.77 11.79 234 236 89,1,3 9 5 6 14 9 7 7,353 497 12.1 12.16 206 207 82,1,106 3 103 5 99 7 93 8 82 10 73 11 60 11 46 11 31 11 16 8 4 5,262 311 12.27 12.4 204 209 97,1,95 190 90 189 81 183 73 176 66 170 55 159 48 149 41 138 37 131 27 115 22 104 17 91 14 85 10 68 8 60 6 45 5 38 5 25 4 16 4 7,491 255 13.38 13.45 180 189 82,4,69 8,51 9,38 10,5 13 1 13,407 266 13.46 13.52 164 175 84,2,47 5,31 6 24 5 13 6 10 5 3 5';


var data3 = "85 33 0.21 0.27 188 37 189,1,2 122 5 116 9 108 13 101 17 94 22 84 27 75 31 66 35 57 40 47 45 39 49 30 52 24 56 17 58 14 63 5,149 38 0.31 0.36 197 37 199,1,3 1 5 7 9 15 13 25 16 38 19 45 26 59 32 65 41 77 45 84 50 95 54 102 58 111 61 115,84 145 0.41 0.47 199 36 201,1,0 14 4 15 14 14 24 12 41 11 47 10 57 9 64 9 74 8 79 8 93 7 106 6 111 5 118 5 122 5,89 150 0.52 0.62 224 33 227,1,10 14 23 13 34 12 41 12 52 11 66 9 80 8 92 6 105 8 109 8 87 7 60 6 39 8 18 10 5 11 9 12 32 9 68 7 81 6 90 5 104 6 100 8,130 173 0.63 0.65 208 81 216,1,4 9 5 5,131 183 0.66 0.68 212 36 215,1,6 12 8 14 4 10 6 7 16 5 21 10 12 16 2 15,145 49 0.75 0.8 150 34 151,2,4 0 4 8 4 14 3 20,3 25 5 32 5 40 5 44 6 53 7 64 7 71 6 81 5 90 6 96 6 100,139 85 0.83 0.86 215 36 219,1,7 12 5 6 6 23 8 16 10 13 15 25,267 80 0.97 0.98 180 30 181,1,3 26,272 66 0.98 1.01 192 36 192,2,2 10 9 5 19 40 11 30,2 10,308 85 1.03 1.05 175 37 177,2,12 3 3 5 10 6 14 5,4 13 19 13,343 56 1.08 1.14 200 36 203,3,11 12 10 8 10 3 13 24,4 30 25 28,14 39 23 40 14 54 12 58 29 56,377 62 1.19 1.22 196 34 198,1,5 7 4 4 6 29 6 23 12 21 21 20 9 32 21 20,413 58 1.23 1.27 203 35 205,1,6 20 6 14 5 7 4 3 7 32 5 26 16 17 24 17 27 32,157 179 1.49 1.52 59 190 120,2,6 9 10 8 4 13 8 12,4 4 7 5,180 172 1.53 1.56 64 207 124,1,8 6 16 6 6 5 5 13 17 12 20 16 8 22 4 10,155 92 1.61 1.63 123 159 124,2,6 5 7 4,3 12 9 11,169 83 1.66 1.68 188 196 185,1,4 4 7 6 3 14 8 28 18 23 11 20,301 162 1.71 1.74 102 209 132,1,6 21 9 8 10 5 5 32 5 42 9 10 10 6 18 20 24 36 7 25,305 169 1.75 1.78 59 204 121,3,14 13 3 18 12 14,28 7 38 5,36 8 30 12 43 9,361 151 1.78 1.83 57 205 124,2,11 9 11 4 15 23 2 30 17 27,15 39 24 38 17 52 18 56,407 160 1.86 1.9 60 208 125,1,9 8 14 9 13 7 16 6 25 5 5 7 7 10 7 18 21 16 24 20 10 27,464 157 1.95 1.97 53 211 126,1,7 3 5 18 21 20 7 20,525 159 2.04 2.06 55 174 113,2,5 5,2 13 17 10 7 10,441 167 2.09 2.1 62 201 128,1,7 6 5 8 6 5,561 151 2.13 2.14 64 206 130,1,4 9 4 4 5 20 7 26,573 147 2.15 2.19 66 213 130,2,5 8 22 5 4 7 5 17 15 15 26 21 22 29 2 30,1 4,60 327 2.72 2.77 62 200 121,1,5 87 11 80 18 73 27 63 33 57 44 44 51 35 58 26 63 20 68 11 75 1,144 307 2.81 2.85 60 214 126,1,3 3 6 6 21 12 41 16 53 21 70 26 83 30 90 32 99 35 110 40 117 40 122 41 127 43 103 33,61 344 2.9 2.95 62 197 121,2,29 67 44 61 57 56 78 47 94 42 107 37 141 26 156 21 167 16 177 11 187 7 192 4 196 1,29 67 44 61 57 56,79 331 2.99 3.02 63 204 125,1,13 12 14 11 18 7 9 7 5 21 14 16 17 8 25 21,201 283 3.04 3.07 59 208 124,1,6 25 8 12 5 10 3 5 5 8 8 22 6 24 5 21 8 17 23 22 16 30,151 394 3.11 3.14 59 209 126,1,12 8 14 5 16 10 11 5 6 13 5 24 27 20,373 237 3.49 3.65 58 208 123,7,2 11 4 4 4 11 5 40 6 43,2 11 4 4 4 11 5 40 6 43,18 18 20 7 20 13 20 39 11 34,32 32 35 34 47 29 37 28 35 37,32 32 35 34 47 29 37 28 35 37,59 27 60 34 62 40 68 28 79 26 84 26 79 30 81 38 93 30 83 28,101 25 104 38 108 29 113 21 117 30,567 225 3.66 3.7 59 204 125,2,3 7 8 32 6 9 13 7 30 5 11 27,11 27,606 243 3.7 3.74 62 206 125,2,12 9 10 4 5 11 12 18 17 10,27 8 31 18 29 15 31 6,653 224 3.75 3.84 63 213 126,3,8 23 17 29 18 34 28 20 31 28 39 21 47 31 54 23 58 31 30 26,65 5 66 8 74 33,89 16 84 24 88 33 99 23 103 32,444 328 5.03 5.08 228 158 227,1,19 10 16 5 10 8 5 17 7 21 15 23 19 27 21 34 15 39 4 35,482 339 5.14 5.16 214 150 210,2,11 6,2 13 6 15 15 14,525 301 5.32 5.35 230 157 228,1,13 7 20 7 11 6 6 21 16 16 17 7 17 14,572 296 5.36 5.38 220 152 217,1,2 17 8 11 9 4 10 21 5 18 1 17 10 17,606 288 5.39 5.42 226 154 222,1,3 11 4 5 5 11 7 27 6 23 6 18 23 17 19 24 3 27 25 17,607 294 5.42 5.44 224 154 222,2,18 18 2 21 24 11,46 8 47 4 50 15 44 17 46 15,684 286 5.45 5.48 228 155 224,1,6 12 10 8 11 4 15 12 14 8 9 7 5 14 23 21,524 324 5.51 5.53 220 153 217,1,19 12 6 12 66 12 128 10 179 5,589 355 5.55 5.57 234 160 230,1,15 5 8 6 4 8 10 6 17 6 16 17 10 23 20 21,314 442 5.85 5.97 234 206 88,5,6 19 9 11 9 7 7 16 4 46 9 18 11 5 28 36 27 39 14 33 18 32,38 23 39 35 40 32 41 26 55 27 54 24 48 30 55 38,69 33 76 24 71 26 71 38 81 30 90 37,108 24 115 23,110 30 120 26,434 416 6.01 6.05 236 209 92,1,3 20 17 20 24 6 24 19 38 67 42 79 39 26,470 374 6.07 6.13 218 193 97,1,4 31 10 32 29 32 52 31 93 27 123 27 137 26 167 23 195 19 216 16 236 14 251 12 270 8 279 6 285 6 289 5 289 9,495 439 6.2 6.23 228 203 94,1,15 9 16 9 11 6 5 15 14 18 20 21 20 30 3 27 13 18,519 431 6.36 6.38 232 204 91,1,13 11 17 4 4 30,535 442 6.4 6.44 224 200 78,2,14 13 17 6 9 8 10 11 17 12 21 22 5 22,26 15 34 15,582 442 6.44 6.47 236 209 87,1,6 11 13 5 10 6 4 15 8 18 17 11 23 18,596 428 6.55 6.56 230 203 92,1,18 12 8 6 4 6 23 18 21 44,622 424 6.57 6.62 218 197 91,3,11 5 4 21 9 36,29 13 19 17 19 22 33 26 20 34,39 24 46 24,679 422 6.68 6.71 221 200 100,2,5 13 5 6 7 28 3 26 15 23 20 26 7 32 14 4,14 4,690 420 6.72 6.73 215 197 93,2,9 28,9 28 10 6 18 37,709 418 6.83 6.84 232 206 97,1,7 11 10 7 13 5 10 6 4 30,719 425 6.85 6.89 221 197 89,2,16 13 12 5 9 13 18 17 17 21 6 21,26 13 38 12,753 415 6.9 6.93 209 195 92,2,15 15 18 17 10 13 4 24 19 29,18 17 19 29 19 4 34 23,751 376 6.95 6.98 230 206 79,1,31 5 34 9 39 24,274 242 7.19 7.26 189 101 62,1,11 8 11 21 12 28 10 37 10 50 9 56 10 63 8 81 9 95 7 106 8 120 6 142 6 181 6 193 4 214 6 226 8 237 11 247,353 198 7.3 7.38 185 107 90,1,32 28 74 26 98 27 126 24 151 22 178 23 210 19 228 16 249 12 262 12 289 9 311 7 340 5 360 6 391 7 402 7 417 9 441 18,278 486 7.43 7.45 191 106 67,2,7 5 8 2 3 18,7 5 8 2 3 18,318 504 7.46 7.48 179 102 62,1,18 5 47 7 72 8 90 9 115 5,437 484 7.68 7.77 180 99 57,1,10 28 18 28 34 27 49 27 62 26 75 25 98 24 114 24 124 24 144 23 152 22 169 23 186 22 197 22 214 21 239 18 250 16 266 15 291 12 305 11 316 10 331 9 350 8 368 7 379 6 389 5,793 213 7.82 7.92 170 96 58,1,5 3 5 11 6 24 6 38 8 53 9 62 10 70 14 82 16 92 17 105 17 122 17 139 17 151 16 165 13 182 12 194 11 202 11 214 13 224 14 234 15 243 16 251 16 262 17 269 14 258,52 400 8.34 8.36 226 233 106,1,7 118 7 122 5 124 28 102 71 53 96 19 104 9 108 5,68 428 8.38 8.41 229 235 95,1,19 16 22 10 23 6 7 9 8 23 21 8 29 28,158 406 8.44 8.48 221 230 105,1,5 5 2 4 0 2 3 4 13 7 37 19 59 33 73 44 97 59 108 65 119 73 128 79 132 81 90 52,221 402 8.52 8.53 225 234 97,1,6 11 5 8 4 5 5 8 10 28,239 399 8.53 8.55 229 239 103,1,3 7 7 27 6 23,50 485 8.59 8.65 222 227 95,2,5 45 26 41 43 39 69 35 86 33 103 29 123 27 150 23 170 21 184 18 209 14 220 10 240 6,5 45 26 41 43 39 69 35 86 33 103 29 123 27 150 23 170 21 184 18 209 14 220 10 240 6,139 524 8.67 8.68 230 240 97,1,5 9 3 5 6 27 8 37,160 526 8.69 8.72 231 236 103,1,4 10 6 5 4 28 12 35 20 32 5 31,401 371 8.88 8.91 217 229 97,1,16 8 17 5 19 11 14 7 6 14 13 20 25 25 24 30 3 28,401 380 8.91 8.93 223 229 99,3,24 21 3 19,42 6 54 5,42 14 48 16 56 15,495 335 9.1 9.12 230 238 96,1,16 10 21 9 20 6 4 11 8 22 18 15 18 11 19 33 24 35,531 336 9.13 9.17 228 232 95,2,7 14 8 17 9 29 4 24 18 22,34 5 37 29,575 336 9.17 9.18 230 237 94,1,4 4 4 12 8 31,595 342 9.21 9.23 211 220 99,1,10 7 10 4 9 17 10 21 3 16 16 12,635 324 9.24 9.25 235 238 94,1,3 6 7 34 10 41,654 320 9.26 9.28 228 234 94,1,5 5 5 9 7 39 21 34 19 29,502 368 9.3 9.32 219 223 93,1,20 15 14 14 3 13 7 13 101 10 167 5 152 8,569 386 9.33 9.35 235 240 97,1,18 6 15 7 9 8 3 11 8 9 18 10 9 26 13 28 34 26 17 14,709 358 9.38 9.4 220 227 90,2,5 6 19 5,7 12 12 13,764 345 9.72 9.74 233 238 94,1,6 8 9 4 6 20 5 35,781 344 9.74 9.78 224 233 98,1,20 14 26 8 24 5 11 8 4 14 15 20 24 29 14 31 11 24 23 5,364 468 9.89 9.97 224 229 97,1,12 4 4 29 4 35 12 3 17 15 24 33 7 24 28 20 33 17 35 30 35 22 46 17 55 18 51 20 69 18 65 13 56 21,434 477 9.97 10.02 221 229 94,3,6 18 11 8 6 22 20 13 23 20,36 13 36 15 41 15,37 6 40 5 45 7,485 444 10.1 10.14 233 237 95,1,1 14 5 14 12 6 25 45 34 71 38 88 36 26,518 398 10.15 10.23 223 227 91,1,4 38 83 31 100 31 125 28 147 25 172 22 198 19 217 16 241 13 265 9 287 7 302 5 319 6 331 8 340 8 345 10 349 10 352 11 353 23,538 473 10.34 10.35 236 239 98,1,4 15 2 11 3 8 4 19 7 31,551 470 10.36 10.39 220 230 95,1,17 10 16 5 7 7 4 12 15 19 14 29 7 28 17 7,571 463 10.4 10.42 230 232 93,1,4 13 8 9 12 4 7 11 10 38,594 474 10.64 10.65 220 225 87,1,3 9 4 3 7 26,596 471 10.65 10.68 221 226 95,2,2 8 5 29,22 15 23 7 17 5 11 12 20 16 25 27 17 26 27 9,633 483 10.69 10.7 212 226 74,1,6 4 3 5 13 4,660 469 10.71 10.73 228 231 82,1,6 15 12 14 17 10 16 7 10 4 5 14 13 12 15 8 14 20 19 27,683 458 10.74 10.75 223 231 99,1,14 35,702 456 10.76 10.77 228 236 94,1,9 9 11 4 5 16,716 459 10.85 10.92 223 229 93,4,2 15 5 18 6 12 7 32,26 9 19 5 13 9 25 19 30 25 19 26 29 11,40 16 42 18,60 10 62 19 64 24,783 463 10.92 10.93 225 235 103,1,4 2 4 10 8 22,786 449 10.93 10.95 225 231 95,2,1 24 5 36,22 20,802 446 11.03 11.04 239 242 106,1,19 6,821 454 11.04 11.09 229 231 100,3,6 24 3 6 4 9 7 27,6 24 3 6 4 9 7 27,23 13 23 7 23 18 28 25 21 25 26 13,878 452 11.1 11.13 230 238 95,2,3 6 5 15,20 9 22 7 20 15 25 28,903 445 11.13 11.15 228 236 96,2,0 4 6 6 16 28 0 34,0 34,849 397 11.16 11.18 225 227 91,2,3 8 5 6,3 8 5 6 3 3 0 5 25 7 48 9,907 401 11.19 11.2 233 239 88,1,6 5,484 597 11.34 11.36 58 185 119,2,4 5 14 5,7 11 18 10,509 580 11.37 11.4 58 209 124,1,18 12 7 14 6 17 15 9 25 38 29 56 30 26,531 539 11.42 11.49 55 195 117,2,4 32,3 28 26 26 50 25 66 24 82 22 112 20 126 18 151 16 166 14 181 13 191 11 211 9 224 8 234 8 249 8 259 7 264 5 267 12,546 597 11.53 11.54 59 204 123,1,7 7 4 4 5 8 10 26,550 591 11.54 11.57 58 208 124,2,1 14 6 32 7 12,18 15 19 6 12 6 7 12 18 18 23 24 16 22 24 7,584 605 11.59 11.6 42 178 121,1,5 7,597 591 11.64 11.67 54 205 125,1,12 11 8 5 4 12 7 14 11 10 12 18 16 30,624 600 11.77 11.78 73 189 134,1,5 7 5 4,643 591 11.79 11.82 58 207 125,1,6 6 2 7 6 7 13 5 12 25 13 15 33 10,686 598 11.88 11.89 56 199 130,1,5 6 2 6,704 587 11.9 11.93 61 215 125,1,11 7 8 6 12 8 10 19 4 24 12 23,826 576 11.98 12.0 59 200 122,2,8 9 7 10 18 10,9 6 6 4 3 5 14 5,864 545 12.19 12.22 55 215 123,1,5 12 9 50 13 65 12 42 14 1,884 521 12.23 12.28 52 191 112,1,25 11 57 10 84 9 107 9 126 8 144 7 157 5 165 5 169 5 168 15,886 566 12.3 12.33 133 208 129,1,21 5 14 7 18 6 19 10 9 19 14 18 18 23 7 27 22 5,902 572 12.34 12.36 56 209 129,1,4 13 12 22 15 15 3 20,923 578 12.36 12.37 63 204 135,1,4 5 6 4,938 563 12.38 12.42 55 208 124,1,16 11 17 8 15 5 7 6 4 14 13 14 16 8 17 28,996 560 12.51 12.54 55 209 124,1,10 5 23 5 24 20 25 30 22 21 15 21 31 16,481 602 12.75 12.78 60 178 119,2,3 2 5 5 13 3,4 9 13 9,498 570 12.85 12.89 62 214 127,2,14 19 3 20 7 22 12 18 13 22 23 58 28 51 23 18 22 6 42 7 62 6 38 28,38 28,531 594 12.9 12.95 58 206 122,2,5 4 13 5 9 9 4 16 14 19 5 25,21 7 19 23 31 27 31 20,589 568 12.99 13.03 61 215 124,1,15 24 11 13 5 15 4 18 13 11 14 15 21 42 25 52 25 39 18 8 24 8 50 5 52 7,622 587 13.04 13.07 62 209 125,1,14 5 16 10 13 5 4 12 14 18 18 10 20 32,671 597 13.1 13.11 68 190 129,1,5 7 4 4 5 7,676 556 13.13 13.17 62 212 126,1,5 26 3 29 14 23 16 21 22 51 27 63 29 37 25 15 24 9 37 9 65 6 70 4,719 581 13.19 13.22 61 210 123,1,11 4 8 6 4 8 15 5 18 8 17 24 19 30 13 19 8 23 27 18,510 594 13.43 13.45 149 211 119,1,13 29 6 39 4 46,544 550 13.45 13.49 177 214 111,2,16 32 7 41 4 38 18 29 19 38,18 22 21 5 19 10 22 22 32 15,609 574 13.5 13.53 174 218 120,1,27 30 17 35 15 38 9 43 3 49 28 22 40 7 33 13 27 12 37 5 40 7 42 13,641 542 13.54 13.57 176 207 75,1,3 10 12 5 15 8 11 17 20 17 10 27,811 586 13.84 13.86 170 195 73,2,6 6 8 5 15 6,6 11 12 13,859 575 13.87 13.91 181 210 75,2,4 12 5 5 5 32,28 15 27 5 18 8 18 12 28 17 32 30 23 28 33 3,901 562 13.92 13.95 182 217 74,1,9 16 4 16 1 15 8 12 11 5 12 21 16 49 19 36,914 548 13.97 13.99 152 171 71,1,8 13 1 13 13 11,980 549 14.0 14.01 170 194 75,1,6 3 5 14,940 572 14.1 14.14 178 214 71,1,3 7 25 5 22 31 10 22 21 22 31 19,121 288 14.46 14.48 180 212 71,1,7 9 8 4 5 25,136 337 14.49 14.5 193 215 85,1,1 9 11 12,128 341 14.52 14.55 186 218 71,1,21 17,100 235 14.56 14.65 182 217 76,3,5 30 4 21 6 29 6 46 5 19 7 21 19 42 6 38 21 28 28 38 38 29 42 24 36 28 49 31 55 20 51 21 54 28 60 21 65 27,77 8 80 7 84 8,78 16,208 210 14.66 14.7 180 211 79,1,4 16 4 11 12 36 20 8 11 8 23 20 24 32,232 187 14.7 14.74 182 215 87,2,3 30 5 22 3 18 14 38 20 47 13 19 11 16 28 12 41 5 29 20,29 20,258 198 14.74 14.77 179 213 72,2,2 1,6 5 3 9 6 8 13 8 15 26 6 23 27 15";


var data4 = '249 92 1.21 1.24 220 222 96,1,5 5 5 30,271 100 1.38 1.45 204 218 100,1,5 7 15 4 18 8 8 17 18 20 20 30 2 30 14 19,302 108 1.49 1.52 204 212 105,1,8 13 15 3 13 9 6 20 15 18,330 113 1.53 1.55 174 189 95,1,7 5,355 96 1.58 1.63 213 222 94,1,5 16 9 13 15 10 15 6 6 8 3 14 13 14 17 7 17 14 19 31,388 91 1.65 1.68 207 210 79,1,2 1 5 32 9 49,419 105 1.7 1.74 190 201 85,2,5 5 2 3 5 5 14 6,5 5 2 3 5 5 14 6,458 93 1.77 1.81 199 209 87,1,6 9 10 8 8 9 9 29 30 27 28 7,264 138 2.24 2.33 216 224 102,1,4 3 5 10 18 14 30 10 41 8 47 11 51 16 55 11 71 6 83 6 94 12 106 7,790 73 4.06 4.09 218 223 95,1,4 7 4 21,791 86 4.09 4.16 218 220 94,3,3 8,20 5 25 12 30 27 35 6 29 14 23 25,35 6,832 83 4.16 4.19 194 203 79,1,6 4 5 9 5 31,853 90 4.2 4.24 169 175 93,2,15 5,3 13 17 12,885 83 4.24 4.28 214 222 93,1,15 8 16 4 5 8 3 16 19 25 21 9,287 195 5.28 5.39 200 210 95,2,6 5 9 5 17 8 12 13 10 17 20 19 20 28 5 31,28 17 41 29 47 16 39 26 37 32,345 210 5.4 5.41 175 192 81,1,2 6 5 5,371 192 5.43 5.48 217 223 91,1,13 14 16 10 10 4 3 11 13 15 18 8 19 23 23 31,413 198 5.49 5.51 182 190 110,1,3 5,417 204 5.52 5.54 170 180 98,1,3 3 12 5,456 188 5.56 5.62 207 217 98,1,2 18 5 13 8 10 12 5 4 15 8 24 21 23 26 15 25 9 8 6,355 248 8.07 8.1 196 159 203,1,3 9 4 10,351 264 8.11 8.12 209 146 208,1,0 4 8 4,371 247 8.14 8.19 203 151 203,1,8 15 13 13 16 9 9 4 4 9 9 15 18 8 18 21 22 28,476 236 8.3 8.36 217 155 214,1,16 10 17 6 8 4 3 12 13 16 19 7 17 10 17 31 15 29,277 291 8.56 8.6 187 191 91,1,1 6 10 5 39 4 98 5 116 5 95 2,355 193 8.69 8.71 214 194 166,1,8 13 2 1 6 10 34 73,306 324 9.07 9.12 204 210 97,1,8 2 15 4 16 10 7 17 13 17 24 24 21 29,335 333 9.13 9.16 215 216 246,1,2 5,335 333 9.16 9.18 205 215 95,1,14 18 21 19 10 17 2 28,410 326 9.28 9.34 198 207 92,2,3 6 6 4 4 6 16 4 11 5,5 13 12 13 21 12,453 284 9.46 9.49 192 200 71,1,8 6 1 5 15 5 52 6,476 317 9.56 9.62 229 231 85,1,10 17 18 16 20 14 20 9 11 5 5 10 13 17 21 8 20 20 21 44,304 365 10.05 10.07 64 176 118,1,8 3 3 4 6 5 33 6 50 8,323 379 10.09 10.14 59 173 114,1,6 2 1 5 13 4 16 8 9 12 19 11 25 13 19 21 16 5,467 362 10.66 10.69 56 182 114,1,4 6 37 5 47 5,481 374 10.71 10.77 55 177 111,1,13 4 7 5 2 6 16 5 16 9 9 13 14 13 23 15 24 19 13 24,307 319 11.0 11.03 206 209 107,1,3 9 1 3 12 20 38 66,359 467 11.14 11.17 206 223 245,2,12 5 15 16 24 22,25 7,363 470 11.17 11.2 212 222 97,1,11 13 20 19 21 4 7 20,395 470 11.21 11.25 202 205 94,2,14 5 9 6,3 12 16 10,435 460 11.42 11.48 205 211 88,1,9 11 3 9 17 5 9 15 26 19 10 28,333 463 11.53 11.55 226 230 93,1,2 7 3 1 6 19 9 38 10 30,352 442 11.57 11.64 212 218 91,1,37 7 96 6 118 4 120 7 124 28 125 60,352 505 11.67 11.7 216 219 96,1,2 9 26 7 110 5 117 5,658 173 12.33 12.36 223 227 94,1,3 4 8 22 12 62,689 187 12.4 12.46 199 208 94,1,3 5 9 4 16 7 7 17 10 19 20 20 22 28 10 38,718 200 12.49 12.51 224 231 115,0,419 450 12.78 12.85 204 214 167,1,39 46 47 43 50 42 41 48 21 51 6 40 7 24 17 11 33 4 52 8 57 14 62 31,748 189 12.98 13.03 197 39 197,1,12 3 13 6 5 14 11 16 23 21 20 32,793 202 13.31 13.33 190 203 86,1,8 5 4 5,813 182 13.35 13.4 214 217 93,1,4 20 14 19 20 13 16 5 5 10 6 20 18 15 21 10 21 18 25 39,849 168 13.41 13.44 222 230 92,1,3 19 3 4 6 41 8 60,882 194 13.47 13.51 185 191 91,2,4 5 9 5,5 13 14 12,930 183 13.53 13.57 212 219 93,1,16 6 13 4 4 14 11 29 31 24 14 5,687 229 13.75 13.83 209 218 91,1,5 10 5 4 6 12 19 16 26 12 35 10 40 16 53 10 62 9 71 15 87 9 59 8,726 268 13.9 13.93 208 214 101,1,4 4 6 17 12 51,746 277 13.94 13.99 198 209 91,1,20 10 20 6 12 5 3 15 20 12 23 7 21 16,783 289 13.99 14.01 140 153 76,1,11 4,805 265 14.04 14.12 206 214 94,2,11 20 14 21 17 16 14 12 4 20 10 21 16 14 15 20 19 37,30 5 33 29,773 342 14.22 14.24 215 219 99,1,4 16 5 10 4 3 4 8 6 33,793 350 14.26 14.29 170 181 88,1,7 3 4 6 4 16 22 17 22 6 12 5,826 333 14.3 14.32 212 220 84,1,6 6 6 34 5 43,802 420 14.38 14.42 197 203 94,1,3 29 2 20 19 5 10 11 17 36 30 21,872 431 14.53 14.56 186 196 91,2,5 2 7 4 2 6 8 5 15 5,5 12 21 8,913 416 14.57 14.61 213 220 93,1,16 5 8 10 10 31 32 22 10 5,973 401 14.62 14.66 222 230 95,1,9 30 19 24 32 6';

var data5 = '232 76 1.39 1.42 223 225 98,1,6 5 15 5 10 6,221 78 1.43 1.45 225 225 85,1,26 3 21 4 9 5 2 6 22 5 28 6,126 179 1.57 1.64 230 237 96,1,14 22 29 9 48 5 60 25 46 56 9 87 4 94 13 93 68 90,265 71 1.94 1.96 224 235 108,1,3 5,266 71 1.98 1.99 226 234 114,1,2 5,250 80 2.01 2.02 206 219 95,1,14 1 5 5 13 5,261 74 2.37 2.39 216 101 122,1,0 6 4 6 8 5,249 77 2.4 2.47 240 111 116,1,20 2 6 7 3 8 14 8 17 9 8 11 14 10 21 9 11 6 6 6 17 6,245 205 3.14 3.16 211 103 110,1,4 8 5 4,239 215 3.17 3.19 215 104 114,1,5 8 2 7 12 6,299 165 3.25 3.28 228 114 138,1,4 7 16 6 31 5 31 14 30 32,310 182 3.29 3.31 220 105 114,1,4 6 8 5 25 5,295 209 3.33 3.36 214 106 113,1,6 4 1 6 21 6 57 7,310 230 3.37 3.44 223 106 115,2,5 7 5 19 6 43,5 7 5 19 6 43,282 74 3.65 3.67 134 146 152,1,0 2 5 5,269 74 3.67 3.72 117 141 151,4,9 5 18 5,12 7 2 10 17 9,2 10,4 15 10 15,430 199 3.91 3.96 54 157 165,1,15 5 17 23 15 21 6 16,515 159 4.01 4.09 53 162 172,1,10 6 15 6 22 5 29 5 26 6 9 8 6 17 6 23 13 21 28 21 36 32 12 38 5 35,486 207 4.1 4.13 52 146 154,1,16 5 9 5 65 5 102 4,502 233 4.17 4.2 55 163 174,1,4 11 3 7 7 21 9 34,522 240 4.2 4.24 55 153 160,1,17 7 13 6 4 20 18 27 36 15 17 8 35 10,538 238 4.25 4.29 54 157 166,2,20 17 1 10 19 12,38 11 49 7 39 12 50 24 66 22 54 5,382 236 6.9 6.96 61 194 121,1,14 8 5 14 7 28 22 26 27 21 5 6,353 167 7.89 7.93 59 199 124,1,10 5 4 15 4 23 22 29 32 13,397 358 8.85 8.9 133 209 131,2,25 7 16 6 8 7 2 9 23 6 31 5 27 19 25 38 8 28,8 28,403 377 8.9 8.92 53 204 121,1,2 9 17 5,442 356 8.93 9.0 61 202 125,1,13 8 25 5 10 9 6 15 6 25 22 21 32 28 13 38,389 401 9.02 9.04 57 181 114,1,22 6 1 8 17 9 101 5 87 5,410 434 9.16 9.18 55 196 122,1,6 24 5 19 4 7 5 31,432 429 9.19 9.27 60 192 123,2,15 9 7 16 4 29 26 36 23 11 7 17 7 19,63 8 56 10 51 26 78 20 47 6,285 372 9.47 9.53 229 236 94,1,11 13 7 16 17 9 40 7 42 39 17 74 4 93 45 87 66 87,413 357 12.61 12.64 178 203 174,1,5 36 40 20 66 6,422 313 12.69 12.75 197 37 197,1,28 5 27 12 14 17 29 22 24 27 3 26,405 429 12.82 12.85 172 193 168,1,20 43 13 45 3 49 41 37 104 7 62 19 42 39,454 481 12.96 13.0 190 52 189,1,7 9 6 14 3 21 9 20,468 486 13.01 13.04 206 39 210,1,4 14 6 8 5 4 4 11 5 31,635 405 13.35 13.38 176 90 95,2,18 4,4 15,724 390 13.4 13.46 213 107 116,1,26 6 9 9 6 11 7 12 21 5 37 8 31 30 4 62 12 63 40 62,786 349 13.49 13.55 215 106 114,1,11 14 17 5 21 13 10 18 20 16 28 19 22 26 5 25 17 28,773 386 13.56 13.58 204 100 109,1,9 4 6 7 49 5 61 6,798 405 13.64 13.7 228 107 116,1,5 25 5 18 4 8 3 4 5 12 4 28 8 25 14 24 20 25 23 16 22 10 20 22 23 54';


var data6 = '239 175 1.44 1.5 230 234 94,1,8 5 10 3 8 16 5 49 7 44,261 212 1.55 1.61 213 227 99,1,5 17 4 10 7 9 9 5 5 20,290 174 1.7 1.89 233 237 96,1,20 8 21 5 24 6 36 5 30 7 19 8 16 9 8 21 16 20 26 23 22 36,363 175 1.97 2.11 229 236 97,1,14 13 23 12 21 6 6 8 8 14 22 30 13 39 8 27 28 9,419 177 2.17 2.35 232 240 95,1,23 8 19 8 22 6 33 5 22 7 10 7 5 17 10 19 31 20 30 34,465 74 2.49 2.61 221 224 95,2,10 8 8 6 3 7 11 8 37 5,3 17 22 16 13 15,468 74 2.99 3.13 212 202 168,3,4 8 17 5,2 17 12 16 13 16,6 21,347 165 3.35 3.63 214 231 202,1,43 62 44 63 34 69 25 68 21 67 13 63 7 54 4 44 4 32 8 17 13 11 28 5 34 5 46 15 49 23 51 43 26 80,506 142 4.29 4.36 192 37 189,1,4 41 11 36 3 41 6 39 45 8,558 124 4.44 4.57 215 39 217,1,8 13 7 9 12 14 6 8 3 6 17 7 16 14 4 20,601 87 4.9 4.96 211 35 215,1,4 14 4 8 5 4 4 30,627 87 5.1 5.24 220 37 220,1,20 5 7 5 3 4 1 7,604 87 6.18 6.26 229 236 97,1,6 17 5 11 7 6 6 32 5 41,631 87 6.3 6.51 237 243 99,1,9 18 11 10 10 7 25 6 30 5 10 8 5 21 15 21 28 22 30 33 8 37,687 85 7.29 7.45 213 36 213,1,14 6 6 11 8 21 17 19 22 12 19 21 16 42,724 89 7.66 7.77 204 36 205,1,10 9 16 9 21 6 13 8 4 27 17 35 30 17 4 15,510 218 8.13 8.21 188 38 188,1,9 8 6 6 2 5 59 33,575 252 8.24 8.34 204 37 204,1,10 10 8 8 12 5 21 14 5 21,615 252 8.77 8.85 232 238 100,1,6 7 5 31 6 20,634 248 8.9 9.07 234 239 97,1,15 12 19 9 18 7 25 6 35 5 21 7 16 9 10 21 29 20 38 24 16 34,689 245 9.87 10.03 194 36 194,1,13 12 15 7 24 8 7 8 9 13 17 18 25 31 9 32 23 14,732 249 10.04 10.15 201 35 202,1,18 7 5 18 18 30 36 24 16 5,407 226 12.11 12.23 53 162 171,2,12 6 10 4 13 5 35 5,8 14 43 18,588 83 13.3 13.37 59 160 166,1,10 4 7 3 4 20 5 59,595 70 13.47 13.62 57 152 161,1,2 5 16 5 49 6 82 8 103 11 129 12 146 13 161 14 168 15 173 16 172 13,762 76 13.7 13.78 55 166 177,1,6 8 6 4 4 11 6 50 7 62,602 136 13.86 13.95 59 161 169,1,26 11 8 13 3 13 7 13 90 8 148 6 140 6';


var data = [];
var background_image = '';


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


// var video_number = getParameterByName('id');
var video_number = '5'; //eli: we only paly video 5

if (video_number == '1')
{
	data = data1;
	background_image = '1.png';
}

else if (video_number == '2')
{
	data = data2;
	background_image = '2.png';
}

else if (video_number == '3')
{
	data = data3;
	background_image = '3.png';
}

else if (video_number == '4')
{
	data = data4;
	background_image = '4.png';
}

else if (video_number == '5')
{
	data = data5;
	background_image = '5.png';
}

else if (video_number == '6')
{
	data = data6;
	background_image = '6.png';
}


else
{
	data = data1;
	background_image = '1.png';
}



/*
var data_list = [];
var _cur_elements = cursor.split(" ");
for (i = 0; i< _cur_elements.length; i += 2)
{
	data_list.push([_cur_elements[i],_cur_elements[i + 1]])
}
*/


var timestamps = [];
var starting_pos = [];
var colors = [];
var strokes = [];
var sub_strokes = [];
var total_points_in_strokes = [];
var counter_count_points = 0;

var current_type = 0; //0 = start_pos and times, //1 = number of following lines, //2 = all the (1) number of lines 
var data_lines = data.split(",");

var number_of_sub_strokes = 0; //running: used to figure out the transition between 3rd and 1st stage

for (i = 0; i < data_lines.length; i++)
{
	//If reading start_pos and timestamps
	if (current_type == 0)
	{
		
		var elements = data_lines[i].split(" ");
		starting_pos.push([elements[0], elements[1]]);
		timestamps.push([elements[2], elements[3]]);
		colors.push([elements[4], elements[5], elements[6]]);
		current_type++;
		
	}//if reading start_pos and timestamps
	
	//If reading the number of following strokes within the same object
	else if (current_type == 1)
	{
		
		number_of_sub_strokes = data_lines[i];
		
		current_type++;
		
	}//if reading the number of following strokes within the same object
	
	//If reading one of the sub-strokes in an object
	else if (current_type == 2)
	{
		number_of_sub_strokes -= 1;
		
		
		//Save data_lines[i] in some good format
		
		var single_stroke = [];
		var stroke_parts = data_lines[i].split(" ");
		
		for (_x = 0; _x + 1 < stroke_parts.length; _x += 2)
		{
			single_stroke.push([stroke_parts[_x],stroke_parts[_x + 1]])
			counter_count_points += 1;
		}
		
		//Add this single stroke to the list of substrokes for this object
		sub_strokes.push(single_stroke);
		
		
		if (number_of_sub_strokes == 0) //tell program that it's time to start looking for the next object
		{
			strokes.push(sub_strokes);
			//Empty sub_strokes list
			sub_strokes = [];				
			
			total_points_in_strokes.push(counter_count_points);
			counter_count_points = 0;
			
			current_type = 0;
		}
		
	}//if reading one of the sub-strokes in an object
	
	
}//for all lines in complete_data

//Add the last sub_strokes to the strokes
if (sub_strokes.length > 0)
{
strokes.push(sub_strokes);
}

if (counter_count_points > 0)
{
total_points_in_strokes.push(counter_count_points);
}


