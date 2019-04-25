{
    "interactionModel": {
        "languageModel": {
            "invocationName": "amadeus",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StartOverIntent",
                    "samples": [
                        "empecemos a jugar",
                        "jueguemos",
                        "quiero jugar",
                        "comienza el juego",
                        "empecemos"
                    ]
                },
                {
                    "name": "ConfirmIntent",
                    "slots": [],
                    "samples": [
                        "vale",
                        "comencemos",
                        "empecemos",
                        "okey",
                        "ok",
                        "de acuerdo",
                        "vamos",
                        "si",
                        "claro"
                    ]
                },
                {
                    "name": "PreguntaIntent",
                    "slots": [
                        {
                            "name": "Dato",
                            "type": "Datos"
                        }
                    ],
                    "samples": [
                        "dime el {Dato}",
                        "dime {Dato}",
                        "cual es {Dato}",
                        "dime la {Dato}"
                    ]
                },
                {
                    "name": "RespuestaIntent",
                    "slots": [
                        {
                            "name": "Respuesta",
                            "type": "AMAZON.NUMBER"
                        }
                    ],
                    "samples": [
                        "{Respuesta}",
                        "es {Respuesta}",
                        "mi respuesta es {Respuesta}",
                        "la respuesta es {Respuesta}"
                    ]
                }
            ],
            "types": [
                {
                    "name": "Datos",
                    "values": [
                        {
                            "name": {
                                "value": "Tiempo"
                            }
                        },
                        {
                            "name": {
                                "value": "Distancia"
                            }
                        }
                    ]
                }
            ]
        }
    }
}