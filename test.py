HTMLString = """
<!-- details -->
<section id="details" class="md:min-h-screen">
    <div class="container mx-auto mt-40">
        <div class="flex flex-col">
            <div class="flex flex-col md:flex-row justify-around">
                <div class="memPgImg flex flex-col">
                    <h3 class="text-sm text-gray-500 font-semibold">members / {sname}</h6>
                    <br />
                    <img src={img} alt={aname} class="rounded-xl" />
                    <br><br>
                    <div class="flex flex-row justify-between">
                        <img src="https://via.placeholder.com/50x50" alt="" class="rounded-full"/>
                        <img src="https://via.placeholder.com/50x50" alt="" class="rounded-full"/>
                        <img src="https://via.placeholder.com/50x50" alt="" class="rounded-full"/>
                    </div>
                </div>
                <div class="memPgTxt flex flex-col w-32 space-y-5">
                    <br>
                    <h1 class="heading text-5xl">{name}</h1>
                    <h2 class="text-3xl font-semibold text-gray-500">{pos}</h2>
                    <p class="text-gray-500 leading-10">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
"""

data = {
    0: {
        "name": "Jack",
        "pos": "CO",
        "img": "https://via.placeholder.com/100x100",
        "social": {
            "fb": "https://www.facebook.com/",
            "tw": "https://twitter.com/",
            "wb": "#"
        },
        "desc": "lorem"
    }
}

print("PROCESS STARTED")
print("PROCESSING ...")
sname=data[0]["name"]
img=data[0]["img"]
aname = data[0]["name"]
name = data[0]["name"]
pos=data[0]["pos"]
desc=data[0]["desc"]
print(HTMLString.format(sname = sname, img = img, aname = aname, name = name, pos = pos, desc = desc))
print("PROCESS COMPLETED")